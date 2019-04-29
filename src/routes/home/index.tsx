import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';

import { Button, Input } from '../../components';

import * as styles from './styles.scss';

export interface IProps extends RouteComponentProps {}

interface IState {
  hello: string;
  input: string;
}

export default class Home extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      hello: 'Hello !',
      input: ''
    };
  }

  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {this.state.hello}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.setState({ hello: 'Hello world !' })} color="primary">
            Trigger state
          </Button>
        </Col>
      </Row>
    );
  }
}
