import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';

// component
import { Button, Card } from '../../components';

// style
import * as styles from './styles.scss';

import { loadScreenShow, loadScreenHide, loaderShow, loaderHide } from '../../actions';
import { ILoaderDispatch } from '../../reducers/loadingBar';

const Loader: IHook = () => {
  const dispatch = useDispatch<ILoaderDispatch>();
  const startLoadScreen = React.useCallback((): void => {
    dispatch(loadScreenShow(I18n.t('pages.loader.loadscreentext')));
    setTimeout(() => dispatch(loadScreenHide()), 3000);
  }, []);
  return (
    <Row className={styles.container}>
      <Col lg={12}>
        <Card header={I18n.t('pages.loader.loadbar')} className={styles.card}>
          <Button.Standar onClick={() => dispatch(loaderShow())}>{I18n.t('pages.loader.show')}</Button.Standar>
          <Button.Standar onClick={() => dispatch(loaderHide())}>{I18n.t('pages.loader.hide')}</Button.Standar>
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
