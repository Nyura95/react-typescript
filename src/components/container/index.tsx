import * as React from 'react';

import { Container as RContainer, ContainerProps } from 'reactstrap';

import * as styles from './styles.scss';
import { joinClass } from '../../helpers/general';

export interface IProps extends ContainerProps {
  removePadding: boolean;
}

interface IState { }

export class Container extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    removePadding: false
  };

  render() {
    return (
      <RContainer
        className={
          this.props.removePadding
            ? joinClass(styles.remove_padding, this.props.className ? this.props.className : '')
            : this.props.className
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
