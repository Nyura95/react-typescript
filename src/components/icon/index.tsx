import * as React from 'react';

export interface IProps {
  icon: string;
  size: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x' | '';
  spin: boolean;
  style: string;
}

interface IState { }

export class Icon extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    size: 'xs',
    spin: false,
    style: ''
  };

  render(): JSX.Element {
    return <i className={`fas fa-${this.props.icon} fa-${this.props.size} ${this.props.spin ? 'fa-spin' : ''} ${this.props.style}`}></i>;
  }
}
