import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';

// component
import { Button, Card } from '../../components';
import { IProps } from './';

// style
import * as styles from './styles.scss';

const Loader: IHook<IProps> = ({ loaderShow, loaderHide, loadScreenShow, loadScreenHide }) => {
  const startLoadScreen = React.useCallback((): void => {
    loadScreenShow(I18n.t('pages.loader.loadscreentext'));
    setTimeout(() => loadScreenHide(), 3000);
  }, []);
  return (
    <Row className={styles.container}>
      <Col lg={12}>
        <Card header={I18n.t('pages.loader.loadbar')} className={styles.card}>
          <Button.Standar onClick={() => loaderShow()}>{I18n.t('pages.loader.show')}</Button.Standar>
          <Button.Standar onClick={() => loaderHide()}>{I18n.t('pages.loader.hide')}</Button.Standar>
        </Card>
      </Col>
      <Col lg={12}>
        <Card header={I18n.t('pages.loader.loadscreen')} className={styles.card}>
          <Button.Standar onClick={startLoadScreen}>{I18n.t('pages.loader.show')}</Button.Standar>
        </Card>
      </Col>
    </Row>
  );
};

Loader.defaultProps = {};

export default Loader;
