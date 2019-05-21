import * as React from 'react';

export interface IProps {
  icon: string;
  spin?: boolean;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x';
  className?: string;
}

const Icon: IHook<IProps> = ({ icon, spin, size, className }) => (
  <i className={`fa ${icon} ${spin ? 'fa-spin' : ''} ${size ? `fa-${size}` : ''} ${className}`} />
);

Icon.defaultProps = {
  spin: false,
  size: 'lg',
  className: ''
};

export default Icon;
