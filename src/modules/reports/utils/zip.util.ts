import { Injectable, Logger } from '@nestjs/common';
import archiver from 'archiver';
import { randomUUID } from 'crypto';

export interface ZipProgress {
  jobId: string;
  total: number;
  completed: number;
  percent: number;
  currentFile: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  error?: string;
}

interface ZipJob {
  progress: ZipProgress;
  zipBuffer: Buffer | null;
  createdAt: number;
  completedAt: number | null;
}

@Injectable()
export class ZipUtil {
  private readonly logger = new Logger(ZipUtil.name);
  private jobMap = new Map<string, ZipJob>();
  private readonly maxJobs = 2;
  private readonly cleanupTTL = 5 * 60 * 1000;

  constructor() {}

  private cleanupOldestCompletedJob(): void {
    let oldestJobId: string | null = null;
    let oldestCompletedAt = Infinity;

    for (const [jobId, job] of this.jobMap.entries()) {
      if (job.progress.status === 'completed' && job.completedAt !== null && job.completedAt < oldestCompletedAt) {
        oldestCompletedAt = job.completedAt;
        oldestJobId = jobId;
      }
    }

    if (oldestJobId) {
      this.clearJob(oldestJobId);
      this.logger.log(`Auto-cleaned oldest completed job: ${oldestJobId}`);
    }
  }

  private scheduleCleanup(jobId: string): void {
    setTimeout(() => {
      const job = this.jobMap.get(jobId);
      if (job && job.progress.status === 'completed') {
        this.clearJob(jobId);
        this.logger.log(`TTL cleanup for job: ${jobId}`);
      }
    }, this.cleanupTTL);
  }

  async startZipGeneration(
    data: any[],
    bufferFunction: (item: any) => Promise<{ buffer: Buffer; fileName: string }>,
  ): Promise<string> {
    const jobId = randomUUID();

    if (this.jobMap.size >= this.maxJobs) {
      this.cleanupOldestCompletedJob();
    }

    const progress: ZipProgress = {
      jobId,
      total: data.length,
      completed: 0,
      percent: 0,
      currentFile: 'Initializing...',
      status: 'pending',
    };

    this.jobMap.set(jobId, {
      progress,
      zipBuffer: null,
      createdAt: Date.now(),
      completedAt: null,
    });

    this.processZip(jobId, data, bufferFunction);

    return jobId;
  }

  private async processZip(
    jobId: string,
    data: any[],
    bufferFunction: (item: any) => Promise<{ buffer: Buffer; fileName: string }>,
  ) {
    const job = this.jobMap.get(jobId);
    if (!job) return;

    job.progress.status = 'processing';

    try {
      const chunks: Buffer[] = [];

      const archive = archiver('zip', {
        zlib: { level: 9 },
      });

      archive.on('data', (chunk) => {
        chunks.push(chunk);
      });

      archive.on('warning', (err) => {
        this.logger.warn(`ZIP warning for job ${jobId}: ${err.message}`);
      });

      archive.on('error', (err) => {
        this.logger.error(`ZIP error for job ${jobId}: ${err.message}`);
        job.progress.status = 'failed';
        job.progress.error = err.message;
      });

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        job.progress.currentFile = `Processing item ${i + 1}/${data.length}`;
        job.progress.completed = i;
        job.progress.percent = Math.round((i / data.length) * 100);

        const { buffer, fileName } = await bufferFunction(item);
        archive.append(buffer, { name: fileName });

        job.progress.completed = i + 1;
        job.progress.percent = Math.round(((i + 1) / data.length) * 100);
      }

      await archive.finalize();

      job.zipBuffer = Buffer.concat(chunks);
      job.progress.status = 'completed';
      job.progress.percent = 100;
      job.progress.currentFile = 'Completed';
      job.completedAt = Date.now();

      this.logger.log(`ZIP generation completed for job ${jobId}, size: ${job.zipBuffer.length} bytes`);

      this.scheduleCleanup(jobId);
    } catch (error: any) {
      job.progress.status = 'failed';
      job.progress.error = error.message;
      this.logger.error(`ZIP generation failed for job ${jobId}: ${error.message}`);
    }
  }

  getProgress(jobId: string): ZipProgress | null {
    const job = this.jobMap.get(jobId);
    if (!job) return null;

    return {
      jobId: job.progress.jobId,
      total: job.progress.total,
      completed: job.progress.completed,
      percent: job.progress.percent,
      currentFile: job.progress.currentFile,
      status: job.progress.status,
      error: job.progress.error,
    };
  }

  getZipBuffer(jobId: string): Buffer | null {
    const job = this.jobMap.get(jobId);
    if (!job || job.progress.status !== 'completed' || !job.zipBuffer) {
      return null;
    }
    return job.zipBuffer;
  }

  clearJob(jobId: string): void {
    const job = this.jobMap.get(jobId);
    if (job) {
      job.zipBuffer = null;
      this.jobMap.delete(jobId);
    }
  }

  clearAllJobs(): number {
    const count = this.jobMap.size;
    for (const [jobId] of this.jobMap) {
      this.clearJob(jobId);
    }
    return count;
  }

  getAllJobs(): ZipProgress[] {
    const allJobs: ZipProgress[] = [];
    for (const [, job] of this.jobMap) {
      allJobs.push({
        jobId: job.progress.jobId,
        total: job.progress.total,
        completed: job.progress.completed,
        percent: job.progress.percent,
        currentFile: job.progress.currentFile,
        status: job.progress.status,
        error: job.progress.error,
      });
    }
    return allJobs;
  }
}
