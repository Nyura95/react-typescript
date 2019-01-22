// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// reducer type
import { IReduxState } from '../../reducers/types';

// Actions
import { setLang, getTranslate } from '../../actions/i18n';
import { I18nDispatch } from '../../actions';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  locale: reducers.i18n.locale
});

const mapDispatchToProps = (dispatch: I18nDispatch): Partial<IProps> => {
  return {
    setLocale: (lang: string) => setLang(lang),
    getTranslate: (): string => getTranslate()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
