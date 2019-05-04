import * as React from 'react';

// module
import { Container as RContainer, ContainerProps } from 'reactstrap';

// helpers
import { joinClass } from '../../helpers/general';

import * as styles from './styles.scss';


export interface IProps extends ContainerProps {
  removePadding?: boolean;
}

interface IState { }

export class Container extends React.Component<IProps, IState> {
  static defaultProps = {
    removePadding: false
  };

  render(): JSX.Element {
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
