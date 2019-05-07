import * as React from 'react';

// https://daneden.github.io/animate.css

export interface IProps {
  timeout: number;
  animateOut: string;
  animateIn: string;
  className: string;
  style: object;
  type: 'children' | 'trigger';
  animateStart: boolean;
  triggerOut: (event: Function) => {} | null;
  triggerIn: (event: Function) => {} | null;
  trigger: (event: Function) => {} | null;
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
    style: {},
    type: 'trigger',
    animateStart: false,
    triggerOut: null,
    triggerIn: null,
    trigger: null
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      previousChildren: null,
      animate: props.animateStart ? props.animateIn : ''
    };
    if (props.triggerOut) this.props.triggerOut(() => this.animeOut());
    if (props.triggerIn) this.props.triggerIn(() => this.animeIn());
    if (props.trigger) this.props.trigger(() => this.anime());
  }

  animeIn(): void {
    this.setState({ previousChildren: this.props.children, animate: this.props.animateIn });
  }
  animeOut(): void {
    this.setState({ previousChildren: null, animate: this.props.animateOut });
  }
  anime(): void {
    this.animeOut();
    this.interval = setInterval(() => {
      this.interval ? clearInterval(this.interval) : null;
      this.animeIn();
    }, this.props.timeout);
  }

  componentWillReceiveProps(nextProps: IProps): void {
    if (nextProps.type === 'children') {
      this.anime();
    }
  }

  render(): JSX.Element {
    return (
      <div
        className={`${this.props.className} ${this.state.animate} animated`}
        style={{ animationDuration: `${this.props.timeout / 1000}s`, ...this.props.style }}
      >
        {this.state.previousChildren || this.props.children}
      </div>
    );
  }
}
