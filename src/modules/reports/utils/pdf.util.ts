import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import { registerHandlebarsHelpers } from '../helpers/handlebars.helpers';

@Injectable()
export class PdfUtil {
  constructor() {
    registerHandlebarsHelpers();
  }

  async generatePdf({ templateHbs, data }: { templateHbs: string; data: any }): Promise<Buffer> {
    // 1. Leer plantilla
    const templatePath = path.join(process.cwd(), templateHbs);

    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    // 2. Compilar Handlebars
    const template = Handlebars.compile(templateHtml);

    const html = template(data);

    // 3. Lanzar Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: 'networkidle0',
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

    await browser.close();

    return Buffer.from(pdfBuffer);
  }
}
