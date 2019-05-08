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

interface IState { }

export class Round extends React.Component<IProps, IState> {
  static defaultProps = {
    color: 'primary',
    busy: false,
    className: '',
    disabled: false,
    style: {},
    type: 'button',
    onClick: () => { }
  };

  showSpinner(): JSX.Element {
    return (
      <div className={styles.container_busy}>
        <Spinner size="lg" className={styles.icon_busy} color={'light'} type='grow' />
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
        className={joinClass(styles.container_arround, styles.btn_primary, styles.lg)}
        type={this.props.type}
      >
        {this.props.busy ? this.showSpinner() : <Icon icon={this.props.icon} className={styles.icon} size='sm' />}
      </RButton>
    );
  }
}
