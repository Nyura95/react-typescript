// redux
import { connect } from 'react-redux';

// component
import Translate, { Props } from './component';

// reducer type
import { Dispatch, RouterState, RouterType, I18nState, I18nType } from '../../actions';
import { ReduxState } from '../../reducers';

// action
import { goBack } from 'connected-react-router';
import { setLocale } from 'react-redux-i18n';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  locale: reducers.i18n.locale,
});

const mapDispatchToProps = (dispatch: Dispatch<RouterType | I18nType, RouterState | I18nState>): Partial<Props> => {
  return {
    setLocale: (lang: string) => dispatch(setLocale(lang)),
    goBack: () => dispatch(goBack()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translate as any);
