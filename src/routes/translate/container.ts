// redux
import { connect } from 'react-redux';

// component
import Translate, { Props } from './component';

// reducer type
import { Dispatch, I18nAction, RouterAction } from '../../actions';
import { ReduxState } from '../../reducers';

// action
import { goBack } from 'connected-react-router';
import { setLocale } from 'react-redux-i18n';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  locale: reducers.i18n.locale,
});

const mapDispatchToProps = (dispatch: Dispatch<I18nAction | RouterAction>): Partial<Props> => {
  return {
    setLocale: (lang: string) => dispatch(setLocale(lang)),
    goBack: () => dispatch(goBack()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translate as any);
