import * as React from 'react';

// module
import { Container as RContainer, ContainerProps } from 'reactstrap';

// helpers
import { joinClass } from '../../helpers/general';

import * as styles from './styles.scss';


export interface IProps extends ContainerProps {
  removePadding?: boolean;
  className?: string;
}

const Container: React.FunctionComponent<IProps> = (props) => {
  return (
    <RContainer
      className={
        props.removePadding
          ? joinClass(styles.remove_padding, props.className ? props.className : '')
          : props.className
      }
      tag={props.tag}
      fluid={props.fluid}
      cssModule={props.cssModule}
    >
      {props.children}
    </RContainer>
  );
};

Container.defaultProps = {
  removePadding: false
};

export default Container;