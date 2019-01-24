import { config } from '../config';
import logger from '../logger';

const source = 'I18n action';

// set the storage
const storage = window.localStorage;

/**
 * change the {lang} in the {storage} and reload the window
 * @param lang string
 * @version 1.0.0
 * @returns void
 */
export const i18nSetLang = (lang: string): void => {
  logger.info(`switch lang to ${lang}`, source);
  storage.setItem(config.i18n.storeName, lang);
  window.location.reload();
};

/**
 * get the current lang in the {storage}
 * @version 1.0.0
 * @returns string
 */
export const i18nGetTranslate = (): string => {
  logger.info(`get current lang set`, source);
  return storage.getItem(config.i18n.storeName) || config.i18n.defaultLang;
};
