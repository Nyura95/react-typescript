import * as React from 'react';
import Button from '.';

import { render, fireEvent } from '@testing-library/react';

describe('Test Button round component', () => {
  const id = 'id';
  const icon = 'fa-home';
  it('renders without crashing', () => {
    const { unmount } = render(<Button.Round icon={icon} />);
    unmount();
  });
  it('check the rendered icon', () => {
    const { unmount, container } = render(<Button.Round icon={icon} />);
    expect(container.querySelector(`.${icon}`)).toBeDefined();
    unmount();
  });
  it('Check onclick', () => {
    let test = 0;
    const click = () => test++;
    const { unmount, getByTestId } = render(<Button.Round icon={icon} onClick={click} data-testid={id} />);
    const input = getByTestId(id);
    input ? fireEvent.click(input) : null;
    expect(test).toBe(1);
    unmount();
  });
  it('Check color attribute', () => {
    const { unmount, getByTestId } = render(<Button.Round icon={icon} color="danger" data-testid={id} />);
    const input = getByTestId(id);
    expect(input ? input.className.trim() : null).toBe('btn btn-danger');
    unmount();
  });
  it('Check busy state', () => {
    const { unmount, getByText, container } = render(<Button.Round icon={icon} busy={true} />);
    // check if spinner is render
    expect(getByText('Loading...')).toBeDefined();
    // check if icon no rendred
    expect(container.querySelector(`.${icon}`)).toBe(null);
    unmount();
  });
});
