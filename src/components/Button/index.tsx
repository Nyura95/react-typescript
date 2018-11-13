import * as React from 'react';

// Modules
import { Button as RButton, ButtonProps } from 'reactstrap';
import { I18n } from 'react-redux-i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps extends ButtonProps {
  color: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  translate?: string;
  busy: boolean;
  className: string;
  icon: IconDefinition;
  style: object;
}

export default class Button extends React.PureComponent<IProps> {
  static defaultProps: IProps = {
    color: 'primary',
    busy: false,
    className: '',
    icon: faSpinner,
    style: {}
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

  render() {
    return (
      <RButton
        color={this.props.color}
        active={this.props.active}
        block={this.props.block}
        disabled={this.props.disabled}
        tag={this.props.tag}
        innerRef={this.props.innerRef}
        onClick={!this.props.busy ? this.props.onClick : () => {}}
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
