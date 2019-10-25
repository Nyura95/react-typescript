import * as React from 'react';

// modules
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Container } from '../../components';

import { i18nSetLang, i18nGetTranslate } from '../../actions';

const Translate: IHook<RouteComponentProps> = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Row>
        <Col lg="auto" md={12} className="text-center text-lg-right mt-4">
          {t('translate', { lang: i18n.language })}
        </Col>
      </Row>
      <Row>
        <Col lg="auto" md={12} className="text-center text-lg-right mt-4">
          <Button.Rectangle
            data-testid="setLang"
            onClick={() => i18nSetLang(i18nGetTranslate() === 'fr' ? 'en' : 'fr')}
            color="info"
          >
            {t('pages.translate.button')}
          </Button.Rectangle>
        </Col>
      </Row>
    </Container>
  );
};

Translate.defaultProps = {};

export default Translate;
