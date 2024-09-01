import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './fr';
import en from './en';

const resources = {
  fr: fr,
  en: en
};

export const languages = ['fr', 'en'];

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.split('-')[0] || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // react already safes from xs
  }
});

export default i18n;
