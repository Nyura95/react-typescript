import * as React from 'react';

// Modules
import { Button as RButton, ButtonProps } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

// Sass import
import * as styles from './Styles.scss';

// Interface props
export interface Props extends ButtonProps {
  color: 'danger' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'link';
  translate?: string;
}

export default class Button extends React.PureComponent<Props> {
  static defaultProps: Props = {
    color: 'primary'
  };

  render() {
    return (
      <RButton
        color={this.props.color}
        active={this.props.active}
        block={this.props.block}
        disabled={this.props.disabled}
        tag={this.props.tag}
        innerRef={this.props.innerRef}
        onClick={this.props.onClick}
        size={this.props.size}
        id={this.props.id}
        style={{ ...styles, ...this.props.style }}
      >
        {this.props.translate ? I18n.t(this.props.translate) : this.props.children}
      </RButton>
    );
  }
}
