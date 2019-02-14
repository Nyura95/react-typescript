import * as React from 'react';

import { RouteComponentProps } from 'react-router';

import { Row, Col } from 'reactstrap';
import { Button } from '../../components';

import * as styles from './styles.scss';

// interface props
export interface IProps extends RouteComponentProps {
  counterSet(counter: number): void;
  counterAsyncSet(counter: number): void;
  counterReset(): void;
  counter: number;
}

export interface IState { }

export class Counter extends React.PureComponent<IProps> {
  render() {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          counter : {this.props.counter}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.counterSet(1)} color="primary">
            Increment
          </Button>
          <Button onClick={() => this.props.counterSet(-1)}>Decrement</Button>
          <Button onClick={() => this.props.counterAsyncSet(1)} color="warning">
            Async increment
          </Button>
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.counterReset()} color="danger">
            Reset
          </Button>
        </Col>
      </Row>
    );
  }
}
