import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Card } from '../../components';

// style
import * as styles from './styles.scss';

const Component: IHook<RouteComponentProps> = ({ history }) => {
  let timeout: NodeJS.Timeout | null = null;
  const [buttonBusy, setButtonBusy] = React.useState<boolean>(false);

  const startButtonBusy = React.useCallback(() => {
    setButtonBusy(true);
    timeout = setTimeout(() => setButtonBusy(false), 3000);
  }, []);

  React.useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [history.location.pathname]);

  return (
    <Row className={styles.container}>
      <Col lg={12}>
        <Card header={I18n.t('pages.component.button')} className={styles.card}>
          <Button.Rectangle onClick={startButtonBusy} busy={buttonBusy}>
            {I18n.t('pages.component.button')}
          </Button.Rectangle>
          <Button.Round icon="fa-home" onClick={startButtonBusy} busy={buttonBusy} />
        </Card>
      </Col>
    </Row>
  );
};

Component.defaultProps = {};

export default Component;
