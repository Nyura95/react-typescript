import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Card } from '../../components';

// style
import * as styles from './styles.scss';

import { loadScreenShow, loadScreenHide, loaderShow, loaderHide } from '../../actions';
import { Dispatch } from 'redux';
import { ILoadScreenAction, ILoaderAction } from '../../reducers';

const Loader: IHook<RouteComponentProps> = () => {
  const dispatch = useDispatch<Dispatch<ILoaderAction | ILoadScreenAction>>();

  const show = React.useCallback(() => dispatch(loaderShow()), [dispatch]);
  const hide = React.useCallback(() => dispatch(loaderHide()), [dispatch]);

  const startLoadScreen = React.useCallback((): void => {
    dispatch(loadScreenShow(I18n.t('pages.loader.loadscreentext')));
    setTimeout(() => dispatch(loadScreenHide()), 3000);
  }, [dispatch]);

  return (
    <Row className={styles.container}>
      <Col lg={12}>
        <Card header={I18n.t('pages.loader.loadbar')} className={styles.card}>
          <Button.Standar onClick={show}>{I18n.t('pages.loader.show')}</Button.Standar>
          <Button.Standar onClick={hide}>{I18n.t('pages.loader.hide')}</Button.Standar>
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
