import * as React from 'react';

import { useSelector } from 'react-redux';

// style
import * as styles from './styles.scss';

import { Spinner, Animated } from '../../components';
import { ILoadScreenState, IReduxState } from '../../reducers';

interface IProps {
  dot?: boolean;
  timeout?: number;
}

const LoadScreen: IHook<IProps> = props => {
  const { show, text } = useSelector<IReduxState, ILoadScreenState>(reducers => reducers.loadscreen);
  const [dot, setDot] = React.useState<string>('.');

  const updateDot = () => {
    if (props.dot) {
      dot.length > 2 ? setDot('.') : setDot(dot + '.');
    }
  };

  React.useEffect(() => {
    if (show === true) updateDot();
  }, []);

  React.useEffect(() => {
    if (show) {
      setTimeout(() => updateDot(), 500);
    }
  }, [show, dot]);

  if (show === false) return <div id="loadScreen" />;
  return (
    <Animated timeout={props.timeout} className={styles.container} animateStart>
      <Spinner className={styles.spinner} type="grow" style={{ width: '4rem', height: '4rem' }} color={'danger'} />
      {text !== '' ? (
        <span className={styles.container_text}>
          {text !== '' ? text : null}
          {props.dot ? <span className={styles.dot}>{dot}</span> : null}
        </span>
      ) : null}
    </Animated>
  );
};

LoadScreen.defaultProps = {
  dot: true,
  timeout: 1000
};

export default LoadScreen;
