// redux
import { connect } from 'react-redux';

// component
import Translate, { Props } from './component';

// reducer type
import { ReduxState } from '../../reducers';

// action
import { goBack } from 'connected-react-router';
import { setLocale } from 'react-redux-i18n';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  locale: reducers.i18n.locale,
});

const mapDispatchToProps = (dispatch: any): Partial<Props> => {
  return {
    goBack: () => dispatch(goBack()),
    setLocale: (lang: string) => dispatch(setLocale(lang)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translate as any);
