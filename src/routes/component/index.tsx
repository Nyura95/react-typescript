import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col, Container } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Card } from '../../components';

const Component: IHook<RouteComponentProps> = ({ history }) => {
  let timeout: NodeJS.Timeout | null = null;
  const [buttonBusy, setButtonBusy] = React.useState<boolean>(false);

  const startButtonBusy = React.useCallback(() => {
    setButtonBusy(true);
    timeout = setTimeout(() => setButtonBusy(false), 3000);
  }, []);

  React.useEffect(
    () => () => {
      if (timeout) clearTimeout(timeout);
    },
    [history.location.pathname]
  );

  return (
    <Container>
      <Row className="mt-4">
        <Col lg={12}>
          <Card header={I18n.t('pages.component.button')}>
            <Row>
              <Col lg="auto" md={12} className="text-center text-lg-right">
                <Button.Rectangle data-testid="button1" onClick={startButtonBusy} busy={buttonBusy}>
                  {I18n.t('pages.component.button')}
                </Button.Rectangle>
              </Col>
              <Col lg="auto" md={12} className="text-center text-lg-right mt-4 mt-lg-0">
                <Button.Round data-testid="button2" icon="fa-home" onClick={startButtonBusy} busy={buttonBusy} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Component.defaultProps = {};

export default Component;
