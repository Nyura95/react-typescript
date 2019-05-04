import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';

// component
import { Button } from '../../components';

// style
import * as styles from './styles.scss';

export interface IProps extends RouteComponentProps { }

interface IState {
  hello: string;
}

export default class Home extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      hello: I18n.t('pages.home.initialState')
    };
  }

  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {this.state.hello}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.setState({ hello: I18n.t('pages.home.state') })} color="primary">
            {I18n.t('pages.home.run')}
          </Button>
        </Col>
      </Row>
    );
  }
}
