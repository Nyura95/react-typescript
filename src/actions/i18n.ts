import { config } from '../config';

// set the storage
const storage = window.localStorage;

/**
 * change the {lang} in the {storage} and reload the window
 * @param lang string
 * @returns void
 */
export const setLang = (lang: string): void => {
  storage.setItem(config.i18n.storeName, lang);
  window.location.reload();
};

/**
 * get the current lang in the {storage}
 * @returns string
 */
export const getTranslate = (): string => storage.getItem(config.i18n.storeName) || config.i18n.defaultLang;
