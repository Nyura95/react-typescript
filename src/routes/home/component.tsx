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
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={() => this.props.push()} />
      </div>
    );
  }
}
export default Counter;
