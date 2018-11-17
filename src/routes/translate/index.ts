// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// Reducer type
import { IReduxState } from '../../reducers';

// reducer type
import { Dispatch, I18nType, I18nState } from '../../actions/types';

// Actions
import { setLang } from '../../actions/i18n';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  locale: reducers.i18n.locale
});

const mapDispatchToProps = (dispatch: Dispatch<I18nType, I18nState>): Partial<IProps> => {
  return {
    setLocale: (lang: string) => setLang(lang)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
