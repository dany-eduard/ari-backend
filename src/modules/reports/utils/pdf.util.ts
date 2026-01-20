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
  }: {
    templateHbs: string;
    data: any;
    browser?: Browser;
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

    const page = await browserInstance.newPage();

    await page.setContent(html, {
      waitUntil: 'networkidle0',
      timeout: 60000,
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

    await page.close(); // Close page instead of browser if shared

    if (!browser) {
      await browserInstance.close();
    }

    return Buffer.from(pdfBuffer);
  }
}
