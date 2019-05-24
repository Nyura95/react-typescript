import * as React from 'react';

// style
import * as styles from './styles.scss';
import { Spinner, Animated } from '../../components';
import { IProps } from './';

const LoadScreen: IHook<IProps> = props => {
  const [dot, setDot] = React.useState<string>('.');

  const updateDot = () => {
    if (props.dot) {
      dot.length > 2 ? setDot('.') : setDot(dot + '.');
    }
  };

  React.useEffect(() => {
    if (props.show === true) updateDot();
  }, []);

  React.useEffect(() => {
    if (props.show) {
      setTimeout(() => updateDot(), 500);
    }
  }, [props.show, dot]);

  if (props.show === false) return <div id="loadScreen" />;
  return (
    <Animated timeout={props.timeout} className={styles.container} animateStart>
      <Spinner className={styles.spinner} type="grow" style={{ width: '4rem', height: '4rem' }} color={'danger'} />
      {props.text !== '' ? (
        <span className={styles.container_text}>
          {props.text !== '' ? props.text : null}
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
