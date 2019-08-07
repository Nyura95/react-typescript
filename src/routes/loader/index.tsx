import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Card, Container } from '../../components';

// style
import * as styles from './styles.scss';

import { loadScreenShow, loadScreenHide, loaderShow, loaderHide } from '../../actions';
import { ILoadScreenDispatch, ILoaderDispatch } from '../../reducers';

const Loader: IHook<RouteComponentProps> = () => {
  const dispatch = useDispatch<ILoadScreenDispatch & ILoaderDispatch>();

  const show = React.useCallback(() => dispatch(loaderShow()), [dispatch]);
  const hide = React.useCallback(() => dispatch(loaderHide()), [dispatch]);

  const startLoadScreen = React.useCallback((): void => {
    dispatch(loadScreenShow(I18n.t('pages.loader.loadscreentext')));
    setTimeout(() => dispatch(loadScreenHide()), 3000);
  }, [dispatch]);

  return (
    <Container>
      <Row className="mt-4">
        <Col lg={12}>
          <Card header={I18n.t('pages.loader.loadbar')}>
            <Row>
              <Col lg="auto" md={12} className="text-center text-lg-right">
                <Button.Rectangle data-testid="showLoader" onClick={show}>
                  {I18n.t('pages.loader.show')}
                </Button.Rectangle>
              </Col>
              <Col lg="auto" md={12} className="text-center text-lg-right mt-4 mt-lg-0">
                <Button.Rectangle data-testid="hideLoader" onClick={hide}>
                  {I18n.t('pages.loader.hide')}
                </Button.Rectangle>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <Card header={I18n.t('pages.loader.loadbar')}>
            <Row>
              <Col lg="auto" md={12} className="text-center text-lg-right">
                <Button.Rectangle data-testid="startLoadingScreen" onClick={startLoadScreen}>
                  {I18n.t('pages.loader.show')}
                </Button.Rectangle>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Loader.defaultProps = {};

export default Loader;
