// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// Reducer type
import { ReduxState } from '../../reducers';

// reducer type
import { Dispatch, I18nType, I18nState } from '../../actions/Types';

// Actions
import { setLocale } from 'react-redux-i18n';

const mapStateToProps = (reducers: ReduxState): Partial<IProps> => ({
  locale: reducers.i18n.locale
});

const mapDispatchToProps = (dispatch: Dispatch<I18nType, I18nState>): Partial<IProps> => {
  return {
    setLocale: (lang: string) => dispatch(setLocale(lang))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
