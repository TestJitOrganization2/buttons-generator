import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translation } from '../../locales/en/translation.ts';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  ns: ['translation'],
  defaultNS: 'translation',
});

export default i18n;
