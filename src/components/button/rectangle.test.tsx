// Link.react.test.js
import * as React from 'react';
import Button from '.';

import { render, fireEvent, queryByAttribute } from '@testing-library/react';

describe('Test Counter component', () => {
  const getById = queryByAttribute.bind(null, 'id');
  it('renders without crashing', () => {
    const { unmount } = render(<Button.Rectangle />);
    unmount();
  });
  it('check the children', () => {
    const children = 'Children';
    const { getByText, unmount } = render(<Button.Rectangle>{children}</Button.Rectangle>);
    expect(getByText(children).innerHTML).toBe(children);
    unmount();
  });
  it('Check onclick', () => {
    let test = 0;
    const click = () => test++;
    const { container, unmount } = render(<Button.Rectangle onClick={click} id="id" />);
    const input = getById(container, 'id');
    input ? fireEvent.click(input) : null;
    expect(test).toBe(1);
    unmount();
  });
  it('snapshot', () => {
    const { asFragment, unmount } = render(<Button.Rectangle />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});
