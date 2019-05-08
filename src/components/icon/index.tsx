import * as React from 'react';

export interface IProps {
  icon: string;
  spin: boolean;
  size: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x'
  className: string;
}

interface IState { }

export class Icon extends React.Component<IProps, IState> {
  static defaultProps = {
    spin: false,
    size: 'lg',
    className: ''
  };

  render(): JSX.Element {
    return <i className={`fa ${this.props.icon} ${this.props.spin ? 'fa-spin' : ''} ${this.props.size ? `fa-${this.props.size}` : ''} ${this.props.className}`} />
  }
}
