import * as React from 'react';

// modules
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Card, Container } from '../../components';

import { loadScreenShow, loadScreenHide, loaderShow, loaderHide } from '../../actions';
import { LoadScreenDispatch, LoaderDispatch } from '../../reducers';

const Loader: IHook<RouteComponentProps> = () => {
  const dispatch = useDispatch<LoadScreenDispatch & LoaderDispatch>();
  const { t } = useTranslation();

  const show = React.useCallback(() => dispatch(loaderShow()), []);
  const hide = React.useCallback(() => dispatch(loaderHide()), []);

  const startLoadScreen = React.useCallback((): void => {
    dispatch(loadScreenShow(t('pages.loader.loadscreentext')));
    setTimeout(() => dispatch(loadScreenHide()), 3000);
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        <Col lg={12}>
          <Card header={t('pages.loader.loadbar')}>
            <Row>
              <Col lg="auto" md={12} className="text-center text-lg-right">
                <Button.Rectangle data-testid="showLoader" onClick={show}>
                  {t('pages.loader.show')}
                </Button.Rectangle>
              </Col>
              <Col lg="auto" md={12} className="text-center text-lg-right mt-4 mt-lg-0">
                <Button.Rectangle data-testid="hideLoader" onClick={hide}>
                  {t('pages.loader.hide')}
                </Button.Rectangle>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <Card header={t('pages.loader.loadbar')}>
            <Row>
              <Col lg="auto" md={12} className="text-center text-lg-right">
                <Button.Rectangle data-testid="startLoadingScreen" onClick={startLoadScreen}>
                  {t('pages.loader.show')}
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
