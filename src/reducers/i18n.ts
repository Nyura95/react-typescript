// i18n reducer
import { I18nState, i18nReducer } from 'react-redux-i18n';
import { IAction } from '../actions';

export type I18nAction = IAction<I18nState, string>;

export { I18nState, i18nReducer };
