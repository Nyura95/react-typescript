import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as styles from './styles.scss';

export interface IProps extends RouteComponentProps<any> {
  increment(): void;
  push(): void;
  counter: number;
}

export class Counter extends React.Component<IProps> {
  static defaultProps = {
    increment: () => {},
    push: () => {},
    counter: 0,
  };

  constructor(props: IProps) {
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
        <button onClick={() => this.startInterval()}>Start</button>
      </div>
    );
  }
}
export default Counter;
