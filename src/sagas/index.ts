import { all } from 'redux-saga/effects';

import i18n from './i18n';
import user from './user';

export default function* rootSaga() {
  yield all([...i18n, ...user]);
}
