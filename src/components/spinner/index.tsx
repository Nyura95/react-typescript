import * as React from 'react';

// module
import { Spinner as RSpinner, SpinnerProps } from 'reactstrap';

interface IProps extends SpinnerProps {
  size?: 'sm' | 'lg';
  color?: 'primary' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  type: 'border' | 'grow';
  style?: object;
  ['data-testid']?: string;
}

const Spinner: IHook<IProps> = props => (
  <RSpinner
    style={props.style ? props.style : {}}
    type={props.type ? props.type : 'border'}
    color={props.color ? props.color : 'primary'}
    size={props.size ? props.size : 'sm'}
    className={props.className}
    data-testid={props['data-testid'] ? props['data-testid'] : null}
  />
);

Spinner.defaultProps = {
  color: 'primary',
  size: 'sm'
};

export default React.memo(Spinner);
