import * as React from 'react';

// typing
import { RouteComponentProps } from 'react-router';

// design module
import { Row, Col, Button } from 'reactstrap';

// sass import
import * as styles from './styles.scss';

// interface props
export interface Props extends RouteComponentProps<any> {
  setCounter(counter: number): void;
  AsyncSetCounter(counter: number): void;
  resetCounter(): void;
  push(to: string): void;
  counter: number;
}

interface State {
  autoInscrement: number;
}

export default class Counter extends React.Component<Props, State> {
  // default props
  static defaultProps = {
    increment: () => {},
    push: () => {},
    AsyncIncrement: () => {},
    resetCounter: () => {},
    counter: 0,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      autoInscrement: 1,
    };
  }

  render() {
    return (
      <Row>
        <Col lg="12">counter : {this.props.counter}</Col>
        <Col lg="12">
          <Button onClick={() => this.props.setCounter(1)} color="primary">
            Increment
          </Button>
          <Button onClick={() => this.props.setCounter(-1)} color="primary">
            Decrement
          </Button>
          <Button onClick={() => this.props.AsyncSetCounter(1)} color="warning">
            Async increment
          </Button>
        </Col>
        <Col lg="12">
          <Button onClick={() => this.props.resetCounter()} color="danger">
            Reset
          </Button>
        </Col>
        <Col lg="12">
          <Button onClick={() => this.props.push('/')} color="info">
            return to the home
          </Button>
        </Col>
      </Row>
    );
  }
}
