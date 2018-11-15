import * as React from 'react';

// Modules
import { Container as RContainer, ContainerProps } from 'reactstrap';

// Sass import
import * as styles from './Styles.scss';

// Interface props
export interface IProps extends ContainerProps {
  removePadding: boolean;
}

export default class Container extends React.Component<IProps> {
  static defaultProps: IProps = {
    removePadding: false
  };

  render() {
    console.log('CONTAINER');
    return (
      <RContainer
        className={
          this.props.removePadding ? [styles.remove_padding, this.props.className].join(' ') : this.props.className
        }
        tag={this.props.tag}
        fluid={this.props.fluid}
        cssModule={this.props.cssModule}
      >
        {this.props.children}
      </RContainer>
    );
  }
}
