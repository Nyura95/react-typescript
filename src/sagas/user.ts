import { put, takeEvery, delay, call } from 'redux-saga/effects';
import { counterReset, userDisconnect, userSet, notificationShow, loaderShow, loaderHide, IAction } from '../actions';
import { IUserAction, ICounterAction } from '../reducers';
import { I18n } from 'react-redux-i18n';
import { SagaIterator } from 'redux-saga';
import { ILoaderAction } from '../reducers/loadingBar';

export type IUserTypeSaga = 'RESET_USER_AND_COUNTER' | 'AUTHENTICATE_USER';

export interface IUserStateSage {
  username: string;
  password: string;
}

const disconnectAndResetCounter = function*(): SagaIterator {
  yield put<ICounterAction>(counterReset());
  yield put<IUserAction>(userDisconnect());
};

const authenticationUser = function*(action: IUserAction): SagaIterator {
  yield put<ILoaderAction>(loaderShow());
  yield delay(1000);
  yield put<IUserAction>(
    userSet({
      username: action.saga ? action.saga.username : '',
      first_name: 'Jean',
      last_name: 'Delacour',
      token: 'ranD0mTokEn'
    })
  );
  yield put<ILoaderAction>(loaderHide());

  yield call(notificationShow, {
    title: I18n.t('notifications.connect.title'),
    message: I18n.t('notifications.connect.message')
  });
};

export default [
  takeEvery<IUserAction>('RESET_USER_AND_COUNTER', disconnectAndResetCounter),
  takeEvery<IUserAction>('AUTHENTICATE_USER', authenticationUser)
];
