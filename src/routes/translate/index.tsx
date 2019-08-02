import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// component
import { Button } from '../../components';

// style
import * as styles from './styles.scss';

import { IReduxState, I18nState } from '../../reducers';
import { i18nSetLang, i18nGetTranslate } from '../../actions';

const Translate: IHook<RouteComponentProps> = () => {
  const { locale } = useSelector<IReduxState, I18nState>(reducers => reducers.i18n);
  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        {I18n.t('translate', { lang: locale })}
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button.Rectangle
          data-testid="setLang"
          onClick={() => i18nSetLang(i18nGetTranslate() === 'fr' ? 'en' : 'fr')}
          color="info"
        >
          {I18n.t('pages.translate.button')}
        </Button.Rectangle>
      </Col>
    </Row>
  );
};

Translate.defaultProps = {};

export default Translate;
