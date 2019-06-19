// i18n reducer
import { I18nState, i18nReducer } from 'react-redux-i18n';
import { IAction } from '../actions';
import { Dispatch } from 'redux';

export type I18nAction = IAction<I18nState, string>;
export type I18nDispatch = Dispatch<I18nAction>;

export { I18nState, i18nReducer };
