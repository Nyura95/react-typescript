// config
import { config } from '../config';

const storage = window.localStorage;

export const setLang = (lang: string) => {
  storage.setItem(config.i18n.storeName, lang);
  window.location.reload();
};

export const getTranslate = () => localStorage.getItem(config.i18n.storeName) || config.i18n.defaultLang;
