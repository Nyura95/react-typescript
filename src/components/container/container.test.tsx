import * as React from 'react';
import Container from '.';

import { render, fireEvent } from '@testing-library/react';

describe('Test icon component', () => {
  const testid = 'test';
  it('renders without crashing', () => {
    const { unmount } = render(<Container />);
    unmount();
  });
  it('Check children is rendered', () => {
    const children = 'Hello worl !';
    const { unmount, getByText } = render(<Container>{children}</Container>);

    const child = getByText(children);
    expect(child).toBeDefined();

    unmount();
  });
  it('Check if remove padding work', () => {
    const className = 'test';
    const { unmount, getByTestId } = render(<Container data-testid={testid} className={className} />);

    const container = getByTestId(testid);
    expect(container).toBeDefined();

    expect(container.className.indexOf(className)).not.toBe(-1);

    unmount();
  });
});
