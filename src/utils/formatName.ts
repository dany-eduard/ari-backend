export function formatName(text: string) {
  if (!text) return '';
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
