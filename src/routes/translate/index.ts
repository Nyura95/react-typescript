import { connect } from 'react-redux';

// module
import { RouteComponentProps } from 'react-router';

// component
import Translate from './component';

// types
import { IReduxState } from '../../reducers/types';

// actions
import { i18nSetLang, i18nGetTranslate } from '../../actions/i18n';

interface IComponentProps extends RouteComponentProps { }

interface IStateProps {
  locale: string;
}

const mapStateToProps = (reducers: IReduxState): IStateProps => ({
  locale: reducers.i18n.locale
});

interface IDispatchProps {
  i18nSetLang(lang: string): void;
  i18nGetTranslate(): string;
}

const mapDispatchToProps = (): IDispatchProps => {
  return {
    i18nSetLang: (lang: string): void => i18nSetLang(lang),
    i18nGetTranslate: (): string => i18nGetTranslate()
  };
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translate);
