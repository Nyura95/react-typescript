import * as React from 'react';
import Input from '.';

import { render, fireEvent, waitForDomChange } from '@testing-library/react';

describe('Test input component', () => {
  const testid = 'input';
  it('Check rendering', () => {
    const { unmount } = render(<Input type="text" onChange={() => {}} value="" />);
    unmount();
  });
  it('Check if type assigned', () => {
    const { unmount, getByTestId } = render(<Input data-testid={testid} type="text" onChange={() => {}} value="" />);
    const input = getByTestId(testid) as HTMLInputElement | null;
    expect(input ? input.type : null).toBe('text');
    unmount();
  });
  it('Check if onChange is running', () => {
    let test = 0;
    const onChange = () => test++;
    const { unmount, getByTestId } = render(<Input data-testid={testid} type="text" onChange={onChange} value={''} />);

    const input = getByTestId(testid) as HTMLInputElement;
    expect(input).toBeDefined();
    expect(input.value).toBe('');

    fireEvent.change(input, {
      target: { value: 'hello' }
    });

    expect(input.value).toBe('hello'); // fails
    expect(test).toBe(1);

    // const input = getByTestId(testid) as HTMLInputElement | null;
    // expect(input ? input.type : null).toBe('text');
    unmount();
  });
});
