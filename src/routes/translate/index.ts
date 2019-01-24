import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Translate, IProps, IState } from './component';
import { IReduxState } from '../../reducers/types';
import { i18nSetLang, i18nGetTranslate } from '../../actions/i18n';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  locale: reducers.i18n.locale
});

const mapDispatchToProps = (): Partial<IProps> => {
  return {
    i18nSetLang: (lang: string) => i18nSetLang(lang),
    i18nGetTranslate: (): string => i18nGetTranslate()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translate as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
