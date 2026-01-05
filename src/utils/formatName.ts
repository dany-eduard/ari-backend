export function formatName(text: string) {
  if (!text) return '';
  return text
    .normalize('NFD') // soporta acentos
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
