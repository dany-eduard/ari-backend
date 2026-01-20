import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import puppeteer, { Browser } from 'puppeteer';
import { registerHandlebarsHelpers } from '../helpers/handlebars.helpers';

@Injectable()
export class PdfUtil {
  constructor() {
    registerHandlebarsHelpers();
  }

  async generatePdf({
    templateHbs,
    data,
    browser,
    timeout = 120000, // 2 minutes default timeout for production
    maxRetries = 3,
  }: {
    templateHbs: string;
    data: any;
    browser?: Browser;
    timeout?: number;
    maxRetries?: number;
  }): Promise<Buffer> {
    // 1. Leer plantilla
    const templatePath = path.join(process.cwd(), templateHbs);
    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    // 2. Compilar Handlebars
    const template = Handlebars.compile(templateHtml);
    const html = template(data);

    // 3. Obtener o lanzar Puppeteer
    const browserInstance =
      browser ||
      (await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
      }));

    let lastError: Error | null = null;

    // Retry logic with exponential backoff
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      const page = await browserInstance.newPage();

      try {
        // Use domcontentloaded instead of networkidle0 for faster rendering
        await page.setContent(html, {
          waitUntil: 'domcontentloaded',
          timeout,
        });

        // 4. Generar PDF → BUFFER
        const pdfBuffer = await page.pdf({
          format: 'A4',
          printBackground: true,
          margin: {
            top: '12mm',
            bottom: '12mm',
            left: '12mm',
            right: '12mm',
          },
        });

        await page.close();

        if (!browser) {
          await browserInstance.close();
        }

        return Buffer.from(pdfBuffer);
      } catch (error) {
        lastError = error as Error;
        await page.close().catch(() => {}); // Ensure page is closed even on error

        if (attempt < maxRetries) {
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Exponential backoff, max 5s
          console.warn(`PDF generation attempt ${attempt} failed, retrying in ${delay}ms...`, error.message);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          console.error(`PDF generation failed after ${maxRetries} attempts:`, error.message);
        }
      }
    }

    // Close browser if we own it and all retries failed
    if (!browser) {
      await browserInstance.close().catch(() => {});
    }

    throw lastError || new Error('PDF generation failed');
  }
}
