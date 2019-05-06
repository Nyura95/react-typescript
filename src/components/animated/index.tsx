import * as React from 'react';

// https://daneden.github.io/animate.css

export interface IProps {
  timeout: number;
  animateOut: string;
  animateIn: string;
  className: string;
}

interface IState {
  previousChildren: React.ReactNode | null;
  animate: string;
}

export class Animated extends React.Component<IProps, IState> {
  private interval: NodeJS.Timeout | null = null;
  static defaultProps = {
    timeout: 200,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    className: ''
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      previousChildren: null,
      animate: props.animateIn
    };
  }

  componentWillReceiveProps(): void {
    this.setState({ previousChildren: this.props.children, animate: this.props.animateOut });
    this.interval = setInterval(() => {
      this.interval ? clearInterval(this.interval) : null;
      this.setState({ previousChildren: null, animate: this.props.animateIn });
    }, this.props.timeout);
  }

  render(): JSX.Element {
    return (
      <div
        className={`${this.props.className} ${this.state.animate} animated`}
        style={{ animationDuration: `${this.props.timeout / 1000}s` }}
      >
        {this.state.previousChildren || this.props.children}
      </div>
    );
  }
}
