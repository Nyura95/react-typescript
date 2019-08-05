import * as React from 'react';
import Spinner from '.';

import { render } from '@testing-library/react';

describe('Test icon component', () => {
  const testid = 'test';
  it('renders without crashing', () => {
    const { unmount } = render(<Spinner type="border" />);
    unmount();
  });
  it('check if type is assigned', () => {
    const { unmount, getByTestId } = render(<Spinner type="border" data-testid={testid} />);

    const spinner = getByTestId(testid);
    expect(spinner).toBeDefined();
    expect(spinner.className.indexOf('border')).not.toBe(-1);

    unmount();
  });
  it('check if size is assigned', () => {
    const { unmount, getByTestId } = render(<Spinner type="border" size="lg" data-testid={testid} />);

    const spinner = getByTestId(testid);
    expect(spinner).toBeDefined();
    expect(spinner.className.indexOf('lg')).not.toBe(-1);

    unmount();
  });
  it('check if color is assigned', () => {
    const { unmount, getByTestId } = render(<Spinner type="border" color="danger" data-testid={testid} />);

    const spinner = getByTestId(testid);
    expect(spinner).toBeDefined();
    expect(spinner.className.indexOf('danger')).not.toBe(-1);

    unmount();
  });
  it('check if className is assigned', () => {
    const { unmount, getByTestId } = render(
      <Spinner className="test" type="border" color="danger" data-testid={testid} />
    );

    const spinner = getByTestId(testid);
    expect(spinner).toBeDefined();
    expect(spinner.className.indexOf('test')).not.toBe(-1);

    unmount();
  });
  it('check if style is assigned', () => {
    const { unmount, getByTestId } = render(
      <Spinner style={{ color: 'red' }} type="border" color="danger" data-testid={testid} />
    );

    const spinner = getByTestId(testid);
    expect(spinner).toBeDefined();
    expect(spinner.style.color).toBe('red');

    unmount();
  });
});
