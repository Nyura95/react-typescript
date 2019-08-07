import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Container } from '../../components';

// style
import * as styles from './styles.scss';

import { IReduxState, I18nState } from '../../reducers';
import { i18nSetLang, i18nGetTranslate } from '../../actions';

const Translate: IHook<RouteComponentProps> = () => {
  const { locale } = useSelector<IReduxState, I18nState>(reducers => reducers.i18n);
  return (
    <Container>
      <Row>
        <Col lg="auto" md={12} className="text-center text-lg-right mt-4">
          {I18n.t('translate', { lang: locale })}
        </Col>
      </Row>
      <Row>
        <Col lg="auto" md={12} className="text-center text-lg-right mt-4">
          <Button.Rectangle
            data-testid="setLang"
            onClick={() => i18nSetLang(i18nGetTranslate() === 'fr' ? 'en' : 'fr')}
            color="info"
          >
            {I18n.t('pages.translate.button')}
          </Button.Rectangle>
        </Col>
      </Row>
    </Container>
  );
};

Translate.defaultProps = {};

export default Translate;
