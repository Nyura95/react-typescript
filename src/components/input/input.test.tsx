import * as React from 'react';
import Input from '.';

import { render, fireEvent } from '@testing-library/react';

describe('Test input component', () => {
  const testid = 'input';
  it('Check rendering', () => {
    const { unmount } = render(<Input type="text" onChange={() => { }} value="" />);
    unmount();
  });
  it('Check if type assigned', () => {
    const { unmount, getByTestId } = render(<Input data-testid={testid} type="text" onChange={() => { }} value="" />);
    const input = getByTestId(testid) as HTMLInputElement | null;
    expect(input ? input.type : null).toBe('text');
    unmount();
  });
  it('Check if onChange running', () => {
    let test = 0;
    const onChange = () => test++;
    const { unmount, getByTestId } = render(<Input data-testid={testid} type="text" onChange={onChange} value={''} />);

    const input = getByTestId(testid) as HTMLInputElement;
    expect(input).toBeDefined();
    expect(input.value).toBe('');



    fireEvent.change(input, {
      target: { value: 'Hello world !' }
    });

    expect(input.value).toBe('Hello world !');
    expect(test).toBe(1);

    unmount();
  });
  it('Check busy state', () => {
    const { unmount, getByTestId } = render(<Input busy={true} data-testid={testid} type="text" onChange={() => { }} value={''} />);
    const input = getByTestId(testid) as HTMLInputElement;

    expect(input).toBeDefined();
    expect(input.value).toBe('');

    fireEvent.change(input, {
      target: { value: 'Hello world !' }
    });

    expect(input.disabled).toBe(true);

    expect(input.value).toBe('');
    unmount();
  });
  it('Check valid invalid', () => {
    const { unmount, getByTestId, rerender } = render(<Input valid data-testid={testid} type="text" onChange={() => { }} value={''} />);
    const input = getByTestId(testid) as HTMLInputElement;

    expect(input).toBeDefined();
    expect(input.className).toBe('is-valid form-control');

    rerender(<Input invalid data-testid={testid} type="text" onChange={() => { }} value={''} />)
    expect(input.className).toBe('is-invalid form-control');

    unmount();
  });

  it('Check formText formFeedBack', () => {
    const test = 'Hello world !';
    const { unmount, getByText, rerender } = render(<Input formText={test} type="text" onChange={() => { }} value={''} />);
    let text = getByText(test);

    expect(text).toBeDefined();
    expect(text.innerHTML).toBe(test);
    expect(text.className).toBe('form-text text-muted');


    rerender(<Input formFeedback={test} data-testid={testid} type="text" onChange={() => { }} value={''} />);

    text = getByText(test);
    expect(text).toBeDefined();
    expect(text.innerHTML).toBe(test);
    expect(text.className).toBe('invalid-feedback');

    unmount();
  });
});
