import * as Handlebars from 'handlebars';

export function registerHandlebarsHelpers() {
  Handlebars.registerHelper('checked', (value: boolean) => (value ? 'checked' : ''));
}
