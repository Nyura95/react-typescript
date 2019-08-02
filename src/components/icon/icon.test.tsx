import * as React from 'react';
import Icon from '.';

import { render } from '@testing-library/react';

describe('Test icon component', () => {
  const faIcon = 'fa-home';
  const testid = 'testid';
  it('renders without crashing', () => {
    const { unmount } = render(<Icon icon={faIcon} />);
    unmount();
  });
  it('check if icon affected', () => {
    const { unmount, getByTestId } = render(<Icon data-testid={testid} icon={faIcon} />);

    const icon = getByTestId(testid);
    expect(icon).toBeDefined();
    expect(icon.className.indexOf(faIcon)).not.toBe(-1);

    unmount();
  });
  it('check if size affected', () => {
    const size = '10x';
    const { unmount, getByTestId } = render(<Icon data-testid={testid} icon={faIcon} size={size} />);

    const icon = getByTestId(testid);
    expect(icon).toBeDefined();
    expect(icon.className.indexOf(size)).not.toBe(-1);

    unmount();
  });
  it('check if spin working', () => {
    const { unmount, getByTestId } = render(<Icon data-testid={testid} icon={faIcon} spin />);

    const icon = getByTestId(testid);
    expect(icon).toBeDefined();
    expect(icon.className.indexOf('spin')).not.toBe(-1);

    unmount();
  });
  it('check if classname is affected', () => {
    const className = 'test';
    const { unmount, getByTestId } = render(<Icon data-testid={testid} icon={faIcon} className={className} />);

    const icon = getByTestId(testid);
    expect(icon).toBeDefined();
    expect(icon.className.indexOf(className)).not.toBe(-1);

    unmount();
  });
});
