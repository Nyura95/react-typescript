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
}

const Button: React.FunctionComponent<IProps> = (props) => {

  React.useEffect(() => { }, [props.color, props.busy, props.disabled]);

  const showIcon = (): JSX.Element => {
    return (
      <div className={styles.container_busy}>
        <span className={styles.text}>{props.children}</span>
        <Spinner size="sm" className={styles.icon} color={'light'} />
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
      className={styles.container_button}
      type={props.type}
    >
      {props.busy ? showIcon() : props.children}
    </RButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  busy: false,
  className: '',
  disabled: false,
  style: {},
  type: 'button',
  onClick: () => { }
};

export default Button;