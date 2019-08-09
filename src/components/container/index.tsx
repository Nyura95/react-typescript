import * as React from 'react';

// module
import { Container as RContainer, ContainerProps } from 'reactstrap';

// helpers
import { joinClass } from '../../helpers/general';

import * as styles from './styles.scss';

interface IProps extends ContainerProps {
  removePadding?: boolean;
  className?: string;
  ['data-testid']?: string;
}

const Container: IHook<IProps> = props => {
  return (
    <RContainer
      className={joinClass(
        props.className ? props.className : '',
        props.removePadding ? styles.remove_padding : '',
        styles.full
      )}
      data-testid={props['data-testid'] ? props['data-testid'] : null}
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
