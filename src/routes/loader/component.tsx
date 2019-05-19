import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';

// component
import { Button, Card } from '../../components';
import { IProps } from './';

// style
import * as styles from './styles.scss';

export const Loader: React.FunctionComponent<IProps> = ({ loaderShow, loaderHide, loadScreenShow, loadScreenHide }) => {
  const startLoadScreen = (): void => {
    loadScreenShow(I18n.t('pages.loader.loadscreentext'));
    setTimeout(() => loadScreenHide(), 3000);
  }
  return (
    <Row className={styles.container}>
      <Col lg={12}>
        <Card header={I18n.t('pages.loader.loadbar')} className={styles.card}>
          <Button onClick={() => loaderShow()}>{I18n.t('pages.loader.show')}</Button>
          <Button onClick={() => loaderHide()}>{I18n.t('pages.loader.hide')}</Button>
        </Card>
      </Col>
      <Col lg={12}>
        <Card header={I18n.t('pages.loader.loadscreen')} className={styles.card}>
          <Button onClick={() => startLoadScreen()}>{I18n.t('pages.loader.show')}</Button>
        </Card>
      </Col>
    </Row>
  );
};