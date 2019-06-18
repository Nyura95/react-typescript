import { put } from 'redux-saga/effects';
import { i18nGetTranslate } from '..//actions';
import translations from '../translations';

export function* i18nFlowSaga() {
  yield put({ type: '@@i18n/LOAD_TRANSLATIONS', translations });
  yield put({ type: '@@i18n/SET_LOCALE', locale: i18nGetTranslate() });
}
