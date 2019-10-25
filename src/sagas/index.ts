import { all } from 'redux-saga/effects';

import counter from './counter';
import user from './user';

export default function* rootSaga() {
  yield all([...counter, ...user]);
}
