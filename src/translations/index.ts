import fr from './fr';
import en from './en';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { config } from '../config';

const lng = localStorage.getItem(config.i18n.storeName);
i18n.use(initReactI18next).init({
  resources: { fr, en },
  lng: lng ? lng : config.i18n.defaultLang,
  fallbackLng: config.i18n.defaultLang,
  interpolation: {
    escapeValue: false
  }
});

export default { fr, en };
