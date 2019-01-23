import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import Component, { IProps, IState } from './component';
import { IReduxState } from '../../reducers/types';
import { setLang, getTranslate } from '../../actions/i18n';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  locale: reducers.i18n.locale
});

const mapDispatchToProps = (): Partial<IProps> => {
  return {
    setLocale: (lang: string) => setLang(lang),
    getTranslate: (): string => getTranslate()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
