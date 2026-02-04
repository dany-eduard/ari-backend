import { Injectable } from '@nestjs/common';
import { PDF, rgb } from '@libpdf/core';

interface PdfData {
  name: string;
  birthDate: string;
  baptismDate: string;
  isMale: boolean;
  isFemale: boolean;
  isOther: boolean;
  isOrdained: boolean;
  isElder: boolean;
  isMinister: boolean;
  isRegular: boolean;
  isSpecial: boolean;
  isMissionary: boolean;
  serviceYear: number;
  months: {
    name: string | number;
    participated: boolean;
    bibleCourses: number | string;
    auxiliary: boolean;
    hours: number | string;
    notes: string;
  }[];
  totalHours?: number;
}

@Injectable()
export class LibPdfUtil {
  async generatePdf(data: PdfData, editable = false): Promise<Buffer> {
    const pdf = PDF.create();
    pdf.setTitle(`Registro de publicador ${data.name} ${data.serviceYear}`);

    const page = pdf.addPage({ size: 'a4' });
    const { width } = page;
    const marginX = 55;
    const marginTop = 780;

    const fontSizeNormal = 12;
    const fontSizeSmall = 10;
    const fontSizeBold = 12;

    let y = marginTop;

    page.drawText('REGISTRO DE PUBLICADOR DE LA CONGREGACIÓN', {
      x: marginX,
      y,
      size: 16,
      font: 'Helvetica-Bold',
      alignment: 'center',
    });
    y -= 26;

    page.drawText('Nombre:', { x: marginX, y, size: fontSizeNormal, font: 'Helvetica-Bold' });
    page.drawText(data.name, { x: marginX + 55, y, size: fontSizeNormal, font: 'Helvetica' });
    y -= 18;

    page.drawText('Fecha de nacimiento:', { x: marginX, y, size: fontSizeNormal, font: 'Helvetica-Bold' });
    page.drawText(data.birthDate, { x: marginX + 125, y, size: fontSizeNormal, font: 'Helvetica' });
    page.drawText('Hombre', { x: width - 145, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, width - 165, y + 3, data.isMale);
    page.drawText('Mujer', { x: width - 90, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, width - 110, y + 3, data.isFemale);
    y -= 18;

    page.drawText('Fecha de bautismo:', { x: marginX, y, size: fontSizeNormal, font: 'Helvetica-Bold' });
    page.drawText(data.baptismDate, { x: marginX + 115, y, size: fontSizeNormal, font: 'Helvetica' });
    page.drawText('Otras ovejas', { x: width - 165, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, width - 185, y + 3, data.isOther);
    page.drawText('Ungido', { x: width - 90, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, width - 110, y + 3, data.isOrdained);
    y -= 18;

    page.drawText('Anciano', { x: marginX, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, marginX + 55, y + 3, data.isElder);
    page.drawText('Siervo ministerial', { x: marginX + 85, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, marginX + 175, y + 3, data.isMinister);
    page.drawText('Precursor regular', { x: marginX + 220, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, marginX + 315, y + 3, data.isRegular);
    y -= 18;
    page.drawText('Precursor especial', { x: marginX, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, marginX + 100, y + 3, data.isSpecial);
    page.drawText('Misionero que sirve en el campo', { x: marginX + 135, y, size: fontSizeNormal, font: 'Helvetica' });
    this.drawCheckbox(page, marginX + 315, y + 3, data.isMissionary);
    y -= 30;

    const colWidths = [85, 78, 65, 65, 78, 115];
    const headers = [
      { text: 'Año de servicio', lines: ['', `(${data.serviceYear})`] },
      { text: 'Participación', lines: ['en el ministerio'] },
      { text: 'Cursos', lines: ['bíblicos'] },
      { text: 'Precursor', lines: ['auxiliar'] },
      { text: 'Horas', lines: ['(Si es precursor o', 'misionero que', 'sirve en el campo)'] },
      { text: 'Notas', lines: [] },
    ];

    let x = marginX;
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      if (header.text) {
        page.drawText(header.text, {
          x: x + colWidths[i] / 2,
          y: y + 12,
          size: fontSizeBold,
          font: 'Helvetica-Bold',
          alignment: 'center',
        });
      }
      for (let lineIdx = 0; lineIdx < header.lines.length; lineIdx++) {
        page.drawText(header.lines[lineIdx], {
          x: x + colWidths[i] / 2,
          y: y + 2 - lineIdx * 8,
          size: 9,
          font: 'Helvetica',
          alignment: 'center',
        });
      }
      x += colWidths[i];
    }
    y -= 30;

    const rowHeight = 18;
    const totalWidth = colWidths.reduce((a, b) => a + b, 0);

    for (let monthIndex = 0; monthIndex < data.months.length; monthIndex++) {
      const month = data.months[monthIndex];
      const rowY = y - monthIndex * rowHeight;

      x = marginX;
      for (let colIndex = 0; colIndex < colWidths.length; colIndex++) {
        page.drawRectangle({
          x,
          y: rowY - rowHeight + 3,
          width: colWidths[colIndex],
          height: rowHeight - 3,
          borderColor: rgb(0, 0, 0),
          borderWidth: 1,
        });
        x += colWidths[colIndex];
      }

      page.drawText(String(month.name), {
        x: marginX + 5,
        y: rowY - 12,
        size: fontSizeSmall,
        font: 'Helvetica',
      });

      this.drawCheckbox(page, marginX + colWidths[0] + colWidths[1] / 2 - 5, rowY - 12 + 3, month.participated);

      const bibleCoursesStr = month.bibleCourses === '' || month.bibleCourses === 0 ? '' : String(month.bibleCourses);
      page.drawText(bibleCoursesStr, {
        x: marginX + colWidths[0] + colWidths[1] + colWidths[2] / 2 - 5,
        y: rowY - 12,
        size: fontSizeSmall,
        font: 'Helvetica',
        alignment: 'center',
      });

      this.drawCheckbox(
        page,
        marginX + colWidths[0] + colWidths[1] + colWidths[2] + colWidths[3] / 2 - 5,
        rowY - 12 + 3,
        month.auxiliary,
      );

      const hoursStr = month.hours === '' || month.hours === 0 ? '' : String(month.hours);
      page.drawText(hoursStr, {
        x: marginX + colWidths[0] + colWidths[1] + colWidths[2] + colWidths[3] + colWidths[4] / 2 - 5,
        y: rowY - 12,
        size: fontSizeSmall,
        font: 'Helvetica',
        alignment: 'center',
      });

      page.drawText(month.notes, {
        x: marginX + totalWidth - colWidths[5] + 5,
        y: rowY - 12,
        size: fontSizeSmall,
        font: 'Helvetica',
      });
    }

    const totalRowY = y - data.months.length * rowHeight;
    let xTotal = marginX;
    for (let colIndex = 0; colIndex < colWidths.length; colIndex++) {
      page.drawRectangle({
        x: xTotal,
        y: totalRowY - rowHeight + 3,
        width: colWidths[colIndex],
        height: rowHeight - 3,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });
      xTotal += colWidths[colIndex];
    }

    page.drawText('Total', {
      x: marginX + 5,
      y: totalRowY - 12,
      size: fontSizeBold,
      font: 'Helvetica-Bold',
      alignment: 'center',
    });

    const totalHoursStr = data.totalHours ? String(data.totalHours) : '';
    page.drawText(totalHoursStr, {
      x: marginX + colWidths.slice(0, 4).reduce((a, b) => a + b, 0) + colWidths[4] / 2 - 5,
      y: totalRowY - 12,
      size: fontSizeBold,
      font: 'Helvetica-Bold',
      alignment: 'center',
    });

    return Buffer.from(await pdf.save());
  }

  private drawCheckbox(page: any, x: number, y: number, checked: boolean) {
    page.drawRectangle({
      x,
      y,
      width: 10,
      height: 10,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
    });
    if (checked) {
      page.drawText('✔', {
        x: x + 2,
        y: y - 2,
        size: 12,
        font: 'Helvetica',
        color: rgb(0, 0, 0),
      });
    }
  }
}
