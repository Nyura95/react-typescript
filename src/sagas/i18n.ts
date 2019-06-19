import { put, fork } from 'redux-saga/effects';

import { i18nGetTranslate } from '..//actions';
import translations from '../translations';

const i18nFlowSaga = function*() {
  yield put({ type: '@@i18n/LOAD_TRANSLATIONS', translations });
  yield put({ type: '@@i18n/SET_LOCALE', locale: i18nGetTranslate() });
};

export default [fork(i18nFlowSaga)];
