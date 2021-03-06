import { put, takeEvery, delay, call } from 'redux-saga/effects';
import { counterReset, userDisconnect, userSet, notificationShow, loaderShow, loaderHide } from '../actions';
import { UserAction, CounterAction } from '../reducers';
import i18n from 'i18next';
import { SagaIterator } from 'redux-saga';
import { LoaderAction } from '../reducers/loadingBar';

export type UserTypeSaga = 'RESET_USER_AND_COUNTER' | 'AUTHENTICATE_USER';

export interface IUserStateSaga {
  username: string;
  password: string;
}

const disconnectAndResetCounter = function*(): SagaIterator {
  yield put<CounterAction>(counterReset());
  yield put<UserAction>(userDisconnect());
};

const authenticationUser = function*(action: UserAction): SagaIterator {
  if (action.saga) {
    yield put<LoaderAction>(loaderShow());

    yield delay(1000);
    yield put<UserAction>(
      userSet({
        username: action.saga.username,
        first_name: 'Jean',
        last_name: 'Delacour',
        token: 'ranD0mTokEn'
      })
    );
    yield put<LoaderAction>(loaderHide());

    yield call(notificationShow, {
      title: i18n.t('notifications.connect.title'),
      message: i18n.t('notifications.connect.message')
    });
  }
};

export default [
  takeEvery<UserAction>('RESET_USER_AND_COUNTER', disconnectAndResetCounter),
  takeEvery<UserAction>('AUTHENTICATE_USER', authenticationUser)
];
