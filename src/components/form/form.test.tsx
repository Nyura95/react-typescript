import * as React from 'react';
import Form from '.';

import { render, fireEvent } from '@testing-library/react';

describe('Test icon component', () => {
  const testid = 'test';
  it('renders without crashing', () => {
    const { unmount } = render(<Form />);
    unmount();
  });
  it('check children', () => {
    const children = "I'm a children !";
    const { unmount, getByText } = render(<Form>{children}</Form>);

    const myChild = getByText(children);
    expect(myChild).toBeDefined();

    unmount();
  });
  it('check onSubmit event', () => {
    let test = 0;
    const onSubmit = () => test++;
    const { unmount, getByTestId } = render(
      <Form onSubmit={onSubmit}>
        <button data-testid={testid} type="submit" />
      </Form>
    );

    const button = getByTestId(testid);
    expect(button).toBeDefined();

    fireEvent.click(button);
    expect(test).toBe(1);

    unmount();
  });

  it('check if className is assigned', () => {
    const { unmount, getByTestId } = render(<Form className="test" data-testid={testid} />);

    const form = getByTestId(testid);
    expect(form).toBeDefined();
    expect(form.className.indexOf('test')).not.toBe(-1);

    unmount();
  });
});
