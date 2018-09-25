// redux
import { connect } from 'react-redux';

// Component
import Component, { Props } from './Component';

// Reducer type
import { ReduxState } from '../../reducers';

// reducer type
import { Dispatch, RouterType, RouterState, I18nType, I18nState } from '../../actions/Constants';

// Actions
import { RouterGoBack } from '../../actions';
import { setLocale } from 'react-redux-i18n';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  locale: reducers.i18n.locale
});

const mapDispatchToProps = (dispatch: Dispatch<RouterType | I18nType, RouterState | I18nState>): Partial<Props> => {
  return {
    setLocale: (lang: string) => dispatch(setLocale(lang)),
    goBack: () => dispatch(RouterGoBack())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
