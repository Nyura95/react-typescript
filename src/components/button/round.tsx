import * as React from 'react';

// module
import { Button as RButton, ButtonProps } from 'reactstrap';

// component 
import { Spinner, Icon } from '../';

// style
import { joinClass } from '../../helpers/general';
import * as styles from './styles.scss';


export interface IProps extends ButtonProps {
  color?: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  busy?: boolean;
  className?: string;
  style?: object;
  icon: string;
}

const Round: IHook<IProps> = (props) => {

  React.useEffect(() => { }, [props.color, props.busy, props.disabled]);

  const showSpinner = (): JSX.Element => {
    return (
      <div className={styles.container_busy}>
        <Spinner size="lg" className={styles.icon_busy} color={'light'} type='grow' />
      </div>
    );
  }

  return (
    <RButton
      color={props.color}
      active={props.active}
      block={props.block}
      disabled={props.disabled}
      onClick={!props.busy ? props.onClick : () => { }}
      size={props.size}
      style={{ ...props.style }}
      className={joinClass(styles.container_arround, styles.btn_primary, styles.lg)}
      type={props.type}
    >
      {props.busy ? showSpinner() : <Icon icon={props.icon} className={styles.icon} size='sm' />}
    </RButton>
  );
};

Round.defaultProps = {
  color: 'primary',
  busy: false,
  className: '',
  disabled: false,
  style: {},
  type: 'button',
  onClick: () => { }
};

export default Round;