import * as React from 'react';

// module
import { Button as RButton, ButtonProps } from 'reactstrap';

// component
import { Spinner } from '..';

// style
import * as styles from './styles.scss';

export interface IProps extends ButtonProps {
  color?: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  busy?: boolean;
  className?: string;
  style?: object;
  id?: string;
}

const Rectangle: IHook<IProps> = props => {
  const showIcon = React.useCallback((): JSX.Element => {
    return (
      <div className={styles.container_busy}>
        <span className={styles.text}>{props.children}</span>
        <Spinner size="sm" className={styles.icon} color={'light'} />
      </div>
    );
  }, [props.children]);

  return (
    <RButton
      color={props.color}
      active={props.active}
      block={props.block}
      disabled={props.disabled}
      onClick={!props.busy ? props.onClick : () => {}}
      size={props.size}
      style={{ ...props.style }}
      className={styles.container_button}
      type={props.type}
      id={props.id ? props.id : undefined}
    >
      {props.busy ? showIcon() : props.children}
    </RButton>
  );
};

Rectangle.defaultProps = {
  color: 'primary',
  busy: false,
  className: '',
  disabled: false,
  style: {},
  type: 'button',
  onClick: () => {}
};

export default Rectangle;
