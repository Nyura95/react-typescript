import { put, takeEvery, delay, call } from 'redux-saga/effects';
import { counterReset, userDisconnect, userSet, notificationShow } from '../actions';
import { IUserAction, ICounterAction } from '../reducers';
import { I18n } from 'react-redux-i18n';
import { SagaIterator } from 'redux-saga';

export type IUserTypeSaga = 'RESET_USER_AND_COUNTER' | 'AUTH_USER';

const disconnectAndResetCounter = function*(): SagaIterator {
  yield put<ICounterAction>(counterReset());
  yield put<IUserAction>(userDisconnect());
};

const authenticationUser = function*(action: IUserAction<{ username: string; password: string }>): SagaIterator {
  // put<ILoaderAction>(loaderShow());
  yield delay(1000);

  yield put<IUserAction>(
    userSet({
      username: action.saga ? action.saga.username : '',
      first_name: 'Jean',
      last_name: 'Delacour',
      token: 'ranD0mTokEn'
    })
  );

  // put<ILoaderAction>(loaderHide());

  // put<INotificationAction>(loaderHide());

  yield call(notificationShow, {
    title: I18n.t('notifications.connect.title'),
    message: I18n.t('notifications.connect.message')
  });
};

export default [
  takeEvery<IUserTypeSaga>('RESET_USER_AND_COUNTER', disconnectAndResetCounter),
  takeEvery<IUserTypeSaga>('AUTH_USER', authenticationUser)
];
