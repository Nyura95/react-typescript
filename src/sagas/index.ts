import { all } from 'redux-saga/effects';

import counter from './counter';
import i18n from './i18n';
import user from './user';

export default function* rootSaga() {
  yield all([...counter, ...i18n, ...user]);
}
