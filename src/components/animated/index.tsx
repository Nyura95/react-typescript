import * as React from 'react';

// https://daneden.github.io/animate.css

interface IProps {
  timeout: number;
  animateOut: string;
  animateIn: string;
  className: string;
  style: object;
  type: 'children' | 'trigger';
  animateStart: boolean;
  triggerOut?: (event: Function) => {} | null;
  triggerIn?: (event: Function) => {} | null;
  trigger?: (event: Function) => {} | null;
}

const Animated: IHook<IProps> = props => {
  let interval: NodeJS.Timeout | null = null;
  const [previousChildren, setPreviousChildren] = React.useState<React.ReactNode | null>(null);
  const [animate, setAnimate] = React.useState<string>('');

  const animeIn = (): void => {
    setPreviousChildren(props.children);
    setAnimate(props.animateIn);
  };
  const animeOut = (): void => {
    setPreviousChildren(null);
    setAnimate(props.animateOut);
  };
  const anime = (): void => {
    animeOut();
    interval = setInterval(() => {
      interval ? clearInterval(interval) : null;
      animeIn();
    }, props.timeout);
  };

  React.useEffect(() => {
    if (props.triggerOut) props.triggerOut(() => animeOut());
    if (props.triggerIn) props.triggerIn(() => animeIn());
    if (props.trigger) props.trigger(() => anime());
  }, []);
  React.useEffect(() => {
    if (props.type === 'children') {
      anime();
    }
  }, [props.children]);

  return (
    <div
      className={`${props.className} ${animate} animated`}
      style={{ animationDuration: `${props.timeout / 1000}s`, ...props.style }}
    >
      {previousChildren || props.children}
    </div>
  );
};

Animated.defaultProps = {
  timeout: 200,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  className: '',
  style: {},
  type: 'trigger',
  animateStart: false
};

export default Animated;

/*export class Animated extends React.Component<IProps, IState> {


  constructor(props: IProps) {
    super(props);
    this.state = {
      previousChildren: null,
      animate: props.animateStart ? props.animateIn : ''
    };
    if (props.triggerOut) props.triggerOut(() => this.animeOut());
    if (props.triggerIn) props.triggerIn(() => this.animeIn());
    if (props.trigger) props.trigger(() => this.anime());
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
}*/
