import * as React from 'react';

// module
import { Spinner as RSpinner, SpinnerProps } from 'reactstrap';

export interface IProps extends SpinnerProps {
  size?: 'sm' | 'lg';
  color?: 'primary' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  type?: 'border' | 'grow';
  style?: object;
}

const Spinner: IHook<IProps> = (props) => {
  return <RSpinner
    style={props.style ? props.style : {}}
    type={props.type ? props.type : 'border'}
    color={props.color ? props.color : 'primary'}
    size={props.size ? props.size : 'sm'}
    className={props.className}
  />
};

Spinner.defaultProps = {
  type: 'border',
  color: 'primary',
  size: 'sm'
};

export default Spinner;