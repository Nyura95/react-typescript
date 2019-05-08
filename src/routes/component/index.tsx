import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';

// component
import { Button, Card } from '../../components';

// style
import * as styles from './styles.scss';

interface IProps { }
interface IState {
  buttonBusy: boolean;
}

export default class Component extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      buttonBusy: false
    }
  }

  startButtonBusy() {
    this.setState({ buttonBusy: !this.state.buttonBusy });
    setTimeout(() => this.setState({ buttonBusy: !this.state.buttonBusy }), 3000);
  }

  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg={12}>
          <Card header={I18n.t('pages.component.button')} className={styles.card}>
            <Button onClick={() => this.startButtonBusy()} busy={this.state.buttonBusy}>{I18n.t('pages.component.button')}</Button>
            <Button.Round icon='fa-home' onClick={() => this.startButtonBusy()} busy={this.state.buttonBusy}></Button.Round>
          </Card>
        </Col>
      </Row>
    );
  }
}
