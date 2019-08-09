import * as React from 'react';

interface IProps {
  icon: string;
  spin?: boolean;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x';
  className?: string;
  ['data-testid']?: string;
}

const Icon: IHook<IProps> = props => (
  <i
    data-testid={props['data-testid'] ? props['data-testid'] : null}
    className={`fa ${props.icon} ${props.spin ? 'fa-spin' : ''} ${props.size ? `fa-${props.size}` : ''} ${
      props.className
    }`}
  />
);

Icon.defaultProps = {
  spin: false,
  size: 'lg',
  className: ''
};

export default Icon;
