import { Injectable, OnModuleDestroy, Logger, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Buffer } from 'buffer';
import * as Handlebars from 'handlebars';
import puppeteer, { Browser, Page } from 'puppeteer';
import { registerHandlebarsHelpers } from '../helpers/handlebars.helpers';

interface PdfOptions {
  templateHbs: string;
  data: any;
  browser?: Browser;
  timeout?: number;
}

@Injectable()
export class PdfUtil implements OnModuleDestroy, OnModuleInit {
  private readonly logger = new Logger(PdfUtil.name);
  private templateCache = new Map<string, Handlebars.TemplateDelegate>();
  private browserPool: Browser | null = null;
  private pagePool: Page[] = [];
  private consecutiveErrors = 0;
  private readonly maxConsecutiveErrors = 3;
  private readonly maxPages = 3;
  private readonly maxHeapUsage = 0.75;
  private readonly pageTimeout = 30000;
  private browserPromise: Promise<Browser> | null = null;

  constructor() {
    registerHandlebarsHelpers();
  }

  async onModuleInit() {
    if (process.env.NODE_ENV === 'production') {
      this.logger.log('Production mode: Browser will be initialized on first request');
    }
  }

  async onModuleDestroy() {
    await this.closeBrowser();
  }

  private async launchBrowser(): Promise<Browser> {
    const startTime = Date.now();

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-software-rasterizer',
        '--disable-extensions',
        '--disable-background-networking',
        '--disable-sync',
        '--disable-translate',
        '--metrics-recording-only',
        '--mute-audio',
        '--no-first-run',
        '--safebrowsing-disable-auto-update',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu-memory-buffer-compositor',
        '--disable-web-security',
        '--memory-pressure-off',
        '--max-old-space-size=256',
      ],
      protocolTimeout: 30000,
      dumpio: false,
    });

    const duration = Date.now() - startTime;
    this.logger.log(`Browser launched in ${duration}ms`);
    this.consecutiveErrors = 0;

    return browser;
  }

  private async getBrowser(): Promise<Browser> {
    if (!this.browserPromise) {
      this.browserPromise = this.launchBrowser();
    }

    if (!this.browserPool) {
      this.browserPool = await this.browserPromise;
      this.browserPromise = null;
    }

    return this.browserPool;
  }

  private async getPage(): Promise<Page> {
    const browser = await this.getBrowser();

    if (this.pagePool.length > 0) {
      const page = this.pagePool.pop()!;
      try {
        if (page.isClosed()) {
          return this.getPage();
        }
        return page;
      } catch {
        return this.getPage();
      }
    }

    const page = await browser.newPage();

    await page.setCacheEnabled(true);
    await page.setRequestInterception(true);

    page.on('request', (request) => {
      if (request.resourceType() === 'image' || request.resourceType() === 'font') {
        request.abort().catch(() => {});
      } else {
        request.continue().catch(() => {});
      }
    });

    return page;
  }

  private releasePage(page: Page) {
    if (!page.isClosed() && this.pagePool.length < this.maxPages) {
      this.pagePool.push(page);
    } else {
      page.close().catch(() => {});
    }
  }

  private async closeBrowser() {
    if (this.browserPool) {
      try {
        await this.browserPool.close();
        this.logger.log('Browser instance closed');
      } catch (error: any) {
        this.logger.warn('Error closing browser:', error.message);
      }
      this.browserPool = null;
      this.browserPromise = null;
      this.pagePool = [];
    }
  }

  async restartBrowser() {
    this.logger.warn('Restarting browser manually');
    await this.closeBrowser();
    this.browserPool = await this.launchBrowser();
    return { status: 'browser restarted' };
  }

  private checkMemory() {
    const usage = process.memoryUsage();
    const heapUsed = usage.heapUsed / 1024 / 1024;
    const heapTotal = usage.heapTotal / 1024 / 1024;
    const percentUsed = usage.heapUsed / usage.heapTotal;

    if (percentUsed > this.maxHeapUsage) {
      this.logger.warn(
        `High memory usage: ${heapUsed.toFixed(2)}MB / ${heapTotal.toFixed(2)}MB (${(percentUsed * 100).toFixed(1)}%)`,
      );
      this.clearCache();
      this.clearPagePool();
    }

    return { heapUsed, heapTotal, percentUsed };
  }

  private getTemplate(templatePath: string): Handlebars.TemplateDelegate {
    let template = this.templateCache.get(templatePath);

    if (!template) {
      try {
        const templateHtml = fs.readFileSync(templatePath, 'utf8');
        template = Handlebars.compile(templateHtml);
        this.templateCache.set(templatePath, template);
      } catch (error) {
        this.logger.error(`Error loading template ${templatePath}:`, error.message);
        throw error;
      }
    }

    return template;
  }

  private clearPagePool() {
    while (this.pagePool.length > 0) {
      const page = this.pagePool.pop();
      page?.close().catch(() => {});
    }
  }

  async clearCache(): Promise<void> {
    this.templateCache.clear();
    this.logger.log('Template cache cleared');
  }

  async generatePdf({ templateHbs, data, browser, timeout = 45000 }: PdfOptions): Promise<Buffer> {
    const startTime = Date.now();
    const memoryBefore = this.checkMemory();
    this.logger.debug(`Memory before PDF generation: ${memoryBefore.heapUsed.toFixed(2)}MB`);

    const templatePath = path.join(process.cwd(), templateHbs);
    const template = this.getTemplate(templatePath);
    const html = template(data);

    const useProvidedBrowser = !!browser;
    const browserInstance = useProvidedBrowser ? browser! : await this.getBrowser();
    const page = await this.getPage();

    try {
      await Promise.race([
        page.setContent(html, { waitUntil: 'domcontentloaded', timeout }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Page setContent timeout')), timeout)),
      ]);

      const pdfResult = await Promise.race([
        page.pdf({
          format: 'A4',
          printBackground: true,
          margin: {
            top: '12mm',
            bottom: '12mm',
            left: '12mm',
            right: '12mm',
          },
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('PDF generation timeout')), timeout)),
      ]);

      this.releasePage(page);
      this.consecutiveErrors = 0;

      const memoryAfter = this.checkMemory();
      const duration = Date.now() - startTime;
      this.logger.debug(`PDF generated in ${duration}ms, Memory after: ${memoryAfter.heapUsed.toFixed(2)}MB`);

      return Buffer.from(pdfResult as Buffer);
    } catch (error: any) {
      this.consecutiveErrors++;
      this.releasePage(page);
      await page.close().catch(() => {});

      if (this.consecutiveErrors >= this.maxConsecutiveErrors && !useProvidedBrowser) {
        await this.restartBrowser();
      }

      if (error.message?.includes('timeout')) {
        this.logger.warn(`PDF generation timeout for ${templateHbs}`);
      } else {
        this.logger.error(`PDF generation error: ${error.message}`);
      }

      throw error;
    }
  }

  async warmup(): Promise<void> {
    this.logger.log('Warming up PDF generation...');
    try {
      const browser = await this.getBrowser();
      for (let i = 0; i < 2; i++) {
        const page = await browser.newPage();
        await page.setContent('<html><body>Warming up</body></html>', { waitUntil: 'domcontentloaded' });
        this.releasePage(page);
      }
      this.logger.log('PDF generation warmup complete');
    } catch (error: any) {
      this.logger.warn('Warmup failed:', error.message);
    }
  }

  async getStatus(): Promise<{ memory: any; pagesInPool: number; consecutiveErrors: number }> {
    const memory = this.checkMemory();
    return {
      memory: {
        heapUsedMB: memory.heapUsed.toFixed(2),
        heapTotalMB: memory.heapTotal.toFixed(2),
        percentUsed: (memory.percentUsed * 100).toFixed(1),
      },
      pagesInPool: this.pagePool.length,
      consecutiveErrors: this.consecutiveErrors,
    };
  }
}
