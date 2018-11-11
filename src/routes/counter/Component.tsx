import * as React from 'react';

// Type
import { RouteComponentProps } from 'react-router';

// Component
import { Row, Col } from 'reactstrap';
import { Button } from '../../components';

// sass import
import * as styles from './styles.scss';

// interface props
export interface IProps extends RouteComponentProps {
  setCounter(counter: number): void;
  AsyncSetCounter(counter: number): void;
  resetCounter(): void;
  counter: number;
}

export default class Counter extends React.PureComponent<IProps> {
  render() {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          counter : {this.props.counter}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.setCounter(1)} color="primary">
            Increment
          </Button>
          <Button onClick={() => this.props.setCounter(-1)}>Decrement</Button>
          <Button onClick={() => this.props.AsyncSetCounter(1)} color="warning">
            Async increment
          </Button>
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.resetCounter()} color="danger">
            Reset
          </Button>
        </Col>
      </Row>
    );
  }
}
