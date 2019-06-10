// i18n reducer
import { I18nState, i18nReducer } from 'react-redux-i18n';
import { ICustomDispatch, ICustomAction } from '../actions';

export type I18nDispatch<S = I18nState, T = string> = ICustomDispatch<S, T>;
export type I18nAction<S = I18nState, T = string> = ICustomAction<S, T>;

export { I18nState, i18nReducer };