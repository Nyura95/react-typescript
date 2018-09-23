// redux
import { connect } from 'react-redux';

// component
import Home, { Props } from './component';

// reducer type
import { ReduxState } from '../../reducers';

// action
import { push } from 'connected-react-router';
import { setLocale } from 'react-redux-i18n';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  locale: reducers.i18n.locale,
});

const mapDispatchToProps = (dispatch: any): Partial<Props> => {
  return {
    push: (to: string) => dispatch(push(to)),
    setLocale: (lang: string) => dispatch(setLocale(lang)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home as any);
