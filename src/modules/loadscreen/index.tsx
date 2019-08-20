import * as React from 'react';

import { useSelector } from 'react-redux';

// style
import * as styles from './styles.scss';

import { Spinner } from '../../components';
import { ILoadScreenState, IReduxState } from '../../reducers';
import { joinClass } from '../../helpers/general';

interface IProps {
  dot?: boolean;
  timeout?: number;
}

const LoadScreen: IHook<IProps> = props => {
  const { show, text } = useSelector<IReduxState, ILoadScreenState>(reducers => reducers.loadscreen);
  const [dot, setDot] = React.useState<string>('.');

  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        if (props.dot) dot.length > 2 ? setDot('.') : setDot(dot + '.');
      }, props.timeout);
    }
  }, [show, dot, props.timeout]);

  if (show === false) return <div id="loadScreen" />;
  return (
    <div className={joinClass(styles.container, 'fadeIn animated')} data-testid="loadingScreen">
      <Spinner className={styles.spinner} type="grow" style={{ width: '4rem', height: '4rem' }} color={'danger'} />
      {text !== '' ? (
        <span className={styles.container_text}>
          {text !== '' ? text : null}
          {props.dot ? <span className={styles.dot}>{dot}</span> : null}
        </span>
      ) : null}
    </div>
  );
};

LoadScreen.defaultProps = {
  dot: true,
  timeout: 500
};

export default LoadScreen;
