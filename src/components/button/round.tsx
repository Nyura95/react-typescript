import * as React from 'react';

// module
import { Button as RButton, ButtonProps } from 'reactstrap';

// component
import { Spinner, Icon } from '../';

// style
import { joinClass } from '../../helpers/general';
import * as styles from './styles.scss';

interface IProps extends ButtonProps {
  color?: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  busy?: boolean;
  className?: string;
  style?: object;
  icon: string;
  'data-testid'?: string;
}

const Round: IHook<IProps> = props => {
  const showSpinner = React.useMemo((): JSX.Element => {
    return (
      <div className={styles.container_busy}>
        <Spinner size="lg" className={styles.icon_busy} color={'light'} type="grow" />
      </div>
    );
  }, []);

  return (
    <RButton
      color={props.color}
      active={props.active}
      block={props.block}
      disabled={props.disabled}
      onClick={!props.busy ? props.onClick : () => {}}
      size={props.size}
      style={{ ...props.style }}
      className={joinClass(styles.container_arround, styles.btn_primary, styles.lg)}
      type={props.type}
      data-testid={props['data-testid'] ? props['data-testid'] : undefined}
    >
      {props.busy ? showSpinner : <Icon icon={props.icon} className={styles.icon} size="sm" />}
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
  onClick: () => {}
};

export default Round;
