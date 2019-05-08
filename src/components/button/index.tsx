import * as React from 'react';

// module
import { Button as RButton, ButtonProps } from 'reactstrap';

// component 
import { Spinner } from '..';
import { Round } from './round'

// style
import * as styles from './styles.scss';

export interface IProps extends ButtonProps {
  color?: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  busy?: boolean;
  className?: string;
  style?: object;
}

interface IState { }

export class Button extends React.Component<IProps, IState> {
  static defaultProps = {
    color: 'primary',
    busy: false,
    className: '',
    disabled: false,
    style: {},
    type: 'button',
    onClick: () => { }
  };
  public static Round: typeof Round = Round;

  showIcon(): JSX.Element {
    return (
      <div className={styles.container_busy}>
        <span className={styles.text}>{this.props.children}</span>
        <Spinner size="sm" className={styles.icon} color={'light'} />
      </div>
    );
  }

  // No PureComponent because the props have a object (shadow compare does not work)
  // Carefull if you need change onClick something else, change this function
  shouldComponentUpdate(nextProps: IProps): boolean {
    return (
      nextProps.color !== this.props.color ||
      nextProps.busy !== this.props.busy ||
      nextProps.disabled !== this.props.disabled
    );
  }

  render(): JSX.Element {
    return (
      <RButton
        color={this.props.color}
        active={this.props.active}
        block={this.props.block}
        disabled={this.props.disabled}
        onClick={!this.props.busy ? this.props.onClick : () => { }}
        size={this.props.size}
        style={{ ...this.props.style }}
        className={styles.container_button}
        type={this.props.type}
      >
        {this.props.busy ? this.showIcon() : this.props.children}
      </RButton>
    );
  }
}
