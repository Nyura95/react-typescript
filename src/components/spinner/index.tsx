import * as React from 'react';

// module
import { Spinner as RSpinner, SpinnerProps } from 'reactstrap';

export interface IProps extends SpinnerProps {
  size?: 'sm' | 'lg';
  color?: 'primary' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  type?: 'border' | 'grow';
}

interface IState { }

export class Spinner extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    color: 'primary',
    size: 'sm',
    type: 'border'
  };

  render(): JSX.Element {
    return <RSpinner type={this.props.type} color={this.props.color} size={this.props.size} className={this.props.className} />
  }
}
