import * as React from 'react';
import Button from '.';

import { render, fireEvent } from '@testing-library/react';

describe('Test Button rectangle component', () => {
  const id = 'id';
  it('renders without crashing', () => {
    const { unmount } = render(<Button.Rectangle />);
    unmount();
  });
  it('check the children', () => {
    const children = 'Children';
    const { unmount, getByTestId } = render(<Button.Rectangle data-testid={id}>{children}</Button.Rectangle>);
    const input = getByTestId(id);
    expect(input ? input.innerHTML : null).toBe(children);
    unmount();
  });
  it('Check onclick', () => {
    let test = 0;
    const click = () => test++;
    const { unmount, getByTestId } = render(<Button.Rectangle onClick={click} data-testid={id} />);
    const input = getByTestId(id);
    input ? fireEvent.click(input) : null;
    expect(test).toBe(1);
    unmount();
  });
  it('Check color attribute', () => {
    const { unmount, getByTestId } = render(<Button.Rectangle color="danger" data-testid={id} />);
    const input = getByTestId(id);
    expect(input ? input.className.trim() : null).toBe('btn btn-danger');
    unmount();
  });
  it('Check busy state', () => {
    const { unmount, getByText } = render(<Button.Rectangle busy={true}>Hello world !</Button.Rectangle>);
    expect(getByText('Loading...')).toBeDefined();
    unmount();
  });
});
