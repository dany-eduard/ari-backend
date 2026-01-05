import { Injectable } from '@nestjs/common';
import archiver from 'archiver';
import { PassThrough } from 'stream';

@Injectable()
export class ZipUtil {
  constructor() {}

  async generateZip(
    data: any[],
    bufferFunction: (item: any) => Promise<{ buffer: Buffer; fileName: string }>,
  ): Promise<{ stream: PassThrough }> {
    const zipStream = new PassThrough();

    const archive = archiver('zip', {
      zlib: { level: 9 },
    });

    archive.pipe(zipStream);

    for (const item of data) {
      const { buffer, fileName } = await bufferFunction(item);
      archive.append(buffer, {
        name: fileName,
      });
    }

    await archive.finalize();

    return { stream: zipStream };
  }
}
