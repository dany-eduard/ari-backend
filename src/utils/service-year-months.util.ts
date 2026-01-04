import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceYearMonths {
  private currentYear: number;

  constructor(currentYear: number) {
    this.currentYear = currentYear;
  }

  get months(): { month: number; serviceYear: number }[] {
    return [
      { month: 9, serviceYear: this.currentYear + 1 },
      { month: 10, serviceYear: this.currentYear + 1 },
      { month: 11, serviceYear: this.currentYear + 1 },
      { month: 12, serviceYear: this.currentYear + 1 },
      { month: 1, serviceYear: this.currentYear },
      { month: 2, serviceYear: this.currentYear },
      { month: 3, serviceYear: this.currentYear },
      { month: 4, serviceYear: this.currentYear },
      { month: 5, serviceYear: this.currentYear },
      { month: 6, serviceYear: this.currentYear },
      { month: 7, serviceYear: this.currentYear },
      { month: 8, serviceYear: this.currentYear },
    ];
  }

  getServiceYear(month: number): number {
    if (month >= 9) return this.currentYear + 1;
    return this.currentYear;
  }
}
