import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';

// component
import { Button } from '../../components';

// type
import { IProps } from './';

// style
import * as styles from './styles.scss';

const Translate: IHook<IProps> = ({ locale, i18nGetTranslate, i18nSetLang }) => {
  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        {I18n.t('translate', { lang: locale })}
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button
          onClick={() => i18nSetLang(i18nGetTranslate() === 'fr' ? 'en' : 'fr')}
          color="info"
        >
          {I18n.t('pages.translate.button')}
        </Button>
      </Col>
    </Row>
  );
};

Translate.defaultProps = {};

export default Translate;