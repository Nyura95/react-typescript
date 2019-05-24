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
  const [animate, setAnimate] = React.useState('');

  const firstUpdate = React.useRef(true);

  const animeIn = React.useCallback((): void => {
    setPreviousChildren(null);
    setAnimate(props.animateIn);
  }, [props.animateIn]);

  const animeOut = React.useCallback((): void => {
    setPreviousChildren(props.children);
    setAnimate(props.animateOut);
  }, [props.animateOut, props.children]);

  const anime = React.useCallback((): void => {
    animeOut();
    interval = setInterval(() => {
      interval ? clearInterval(interval) : null;
      animeIn();
    }, props.timeout);
  }, [props.timeout, props.children, props.animateIn, props.animateOut]);

  React.useEffect((): void => {
    if (props.triggerOut) props.triggerOut(animeOut);
    if (props.triggerIn) props.triggerIn(animeIn);
    if (props.trigger) props.trigger(anime);
  }, [props.timeout, props.animateOut, props.animateIn, props.children]);

  if (props.type === 'children' && !firstUpdate.current) {
    anime();
  }
  firstUpdate.current = false;

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
