import * as React from 'react';

import { Button as RButton, ButtonProps } from 'reactstrap';
import { I18n } from 'react-redux-i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import * as styles from './styles.scss';

export interface IProps extends ButtonProps {
  color: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  translate?: string;
  busy: boolean;
  className: string;
  icon: IconDefinition;
  style: object;
}

interface IState { }

export class Button extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    color: 'primary',
    busy: false,
    className: '',
    disabled: false,
    icon: faSpinner,
    style: {},
    onClick: () => { }
  };

  showText() {
    return this.props.translate ? I18n.t(this.props.translate) : this.props.children;
  }

  showIcon() {
    return (
      <div className={styles.container_busy}>
        <span className={styles.text}>{this.showText()}</span>
        <FontAwesomeIcon className={styles.icon} icon={this.props.icon} spin={true} />
      </div>
    );
  }

  // No PureComponent because the props have a object (shadow compare does not work)
  // Carefull if you need change onClick something else, change this function
  shouldComponentUpdate(nextProps: IProps) {
    return (
      nextProps.color !== this.props.color ||
      nextProps.busy !== this.props.busy ||
      nextProps.disabled !== this.props.disabled
    );
  }

  render() {
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
