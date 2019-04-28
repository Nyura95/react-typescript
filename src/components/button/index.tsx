import * as React from 'react';

// module
import { Button as RButton, ButtonProps } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

// component
import { Icon } from '../'

// style
import * as styles from './styles.scss';

export interface IProps extends ButtonProps {
  color: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  translate?: string;
  busy: boolean;
  className: string;
  style: object;
}

interface IState { }

export class Button extends React.Component<IProps, IState> {
  static defaultProps = {
    color: 'primary',
    busy: false,
    className: '',
    disabled: false,
    style: {},
    onClick: () => { }
  };

  showText(): React.ReactNode | string {
    return this.props.translate ? I18n.t(this.props.translate) : this.props.children;
  }

  showIcon(): JSX.Element {
    return (
      <div className={styles.container_busy}>
        <span className={styles.text}>{this.showText()}</span>
        <Icon icon='spinner' spin={true} style={styles.icon} size='lg' />
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
        tag={this.props.tag}
        innerRef={this.props.innerRef}
        onClick={!this.props.busy ? this.props.onClick : () => { }}
        size={this.props.size}
        id={this.props.id}
        style={{ ...this.props.style }}
        className={styles.btn_primary}
      >
        {this.props.busy ? this.showIcon() : this.showText()}
      </RButton>
    );
  }
}
