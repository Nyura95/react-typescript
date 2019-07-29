import * as React from 'react';
import Button from '.';

import { render, fireEvent } from '@testing-library/react';

describe('Test Button component', () => {
  const id = 'id';
  it('renders without crashing', () => {
    const { unmount } = render(<Button.Rectangle />);
    unmount();
  });
  it('check the children', () => {
    const children = 'Children';
    const { container, unmount } = render(<Button.Rectangle id={id}>{children}</Button.Rectangle>);
    const input = container.querySelector(`#${id}`);
    expect(input ? input.innerHTML : null).toBe(children);
    unmount();
  });
  it('Check onclick', () => {
    let test = 0;
    const click = () => test++;
    const { container, unmount } = render(<Button.Rectangle onClick={click} id={id} />);
    const input = container.querySelector(`#${id}`);
    input ? fireEvent.click(input) : null;
    expect(test).toBe(1);
    unmount();
  });
  it('Check color attribute', () => {
    const { container, unmount } = render(<Button.Rectangle color="danger" id={id} />);
    const input = container.querySelector(`#${id}`);
    expect(input ? input.className.trim() : null).toBe('btn btn-danger');
    unmount();
  });
  it('Check busy state', () => {
    const { unmount, getByText } = render(<Button.Rectangle busy={true}>Hello world !</Button.Rectangle>);
    expect(getByText('Loading...')).toBeDefined();
    unmount();
  });
});
