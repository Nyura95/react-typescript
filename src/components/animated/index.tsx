import * as React from 'react';

// https://daneden.github.io/animate.css

export interface IProps {
  timeout: number;
  animateOut: string;
  animateIn: string;
  className: string;
  type: 'children' | 'trigger';
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
    className: '',
    type: 'children',
    out: false
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      previousChildren: null,
      animate: props.animateIn
    };
  }

  animeIn() {
    this.setState({ previousChildren: this.props.children, animate: this.props.animateIn });
  }
  animeOut() {
    this.setState({ previousChildren: null, animate: this.props.animateOut });
  }
  forceAnime() {
    this.animeOut();
    this.interval = setInterval(() => {
      this.interval ? clearInterval(this.interval) : null;
      this.animeIn();
    }, this.props.timeout);
  }

  componentWillReceiveProps(nextProps: IProps): void {
    if (nextProps.type === 'children') {
      this.forceAnime();
    }
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
