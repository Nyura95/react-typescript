import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as styles from './styles.scss';

export interface Props extends RouteComponentProps<any> {
  increment(): void;
  push(): void;
  counter: number;
}

export default class Counter extends React.Component<Props> {
  static defaultProps = {
    increment: () => {},
    push: () => {},
    counter: 0,
  };

  constructor(props: Props) {
    super(props);
  }

  startInterval() {
    setInterval(() => {
      this.props.increment();
    }, 1000);
  }

  render() {
    return (
      <div>
        counter : {this.props.counter}
        <div>
          <button onClick={() => this.startInterval()}>Start</button>
        </div>
      </div>
    );
  }
}
