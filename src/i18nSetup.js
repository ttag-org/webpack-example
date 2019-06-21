import { addLocale, useLocale } from 'ttag';

export async function setupi18n() {
  const locale = document.cookie;
  if (locale === 'uk') {
    const data = await import('../i18n/uk.po.json');
    addLocale(locale, data);
    useLocale(locale);
  }
}
