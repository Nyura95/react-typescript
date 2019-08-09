import * as React from 'react';
import Error, { ICatchComponent } from '.';

import { render } from '@testing-library/react';

const stringChildren = "Hello I'm a children !";
const stringError = 'Oops, I crashed !';

interface IProps {
  crash?: boolean;
}

const CatchComponent: ICatchComponent = props => {
  return <div>{props.error}</div>;
};

const Children: React.FunctionComponent<IProps> = props => {
  if (props.crash) {
    throw stringError;
  }
  return <div>{stringChildren}</div>;
};

const Component: React.FunctionComponent<IProps> = props => {
  return (
    <Error catchComponent={props => <CatchComponent {...props} />}>
      <Children crash={props.crash} />
    </Error>
  );
};
Component.defaultProps = {
  crash: false
};

describe('Test error component', () => {
  it('renders without crashing', () => {
    const { unmount } = render(<Component />);
    unmount();
  });
  it('Check if children is rendered', () => {
    const { unmount, getByText } = render(<Component />);
    expect(getByText(stringChildren)).toBeDefined();
    unmount();
  });
  it('Check if crash component is rendered', () => {
    const { unmount, getByText } = render(<Component crash />);
    expect(getByText(stringError)).toBeDefined();
    unmount();
  });
});
