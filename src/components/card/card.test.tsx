import * as React from 'react';
import Card from '.';

import { render, fireEvent } from '@testing-library/react';

describe('Test icon component', () => {
  const testid = 'test';
  it('renders without crashing', () => {
    const { unmount } = render(<Card />);
    unmount();
  });
  it('check children', () => {
    const children = "I'm a children !";
    const { unmount, getByText } = render(<Card>{children}</Card>);

    const myChild = getByText(children);
    expect(myChild).toBeDefined();

    unmount();
  });
  it('check header rendering', () => {
    const header = 'Hello world !';
    const { unmount, getByText } = render(<Card header={header} />);

    const card = getByText(header);
    expect(card).toBeDefined();

    unmount();
  });

  it('check title rendering', () => {
    const title = 'Hello world !';
    const { unmount, getByText } = render(<Card title={title} />);

    const card = getByText(title);
    expect(card).toBeDefined();

    unmount();
  });

  it('check footer rendering', () => {
    const footer = 'Hello world !';
    const { unmount, getByText } = render(<Card footer={footer} />);

    const card = getByText(footer);
    expect(card).toBeDefined();

    unmount();
  });

  it('check if className is assigned', () => {
    const className = 'test';
    const { unmount, getByTestId } = render(<Card className={className} data-testid={testid} />);

    const card = getByTestId(testid);
    expect(card).toBeDefined();
    expect(card.className.indexOf(className)).not.toBe(-1);

    unmount();
  });

  it('check busy rendering', () => {
    const children = 'Hello world !';
    const { unmount, getByText, rerender } = render(<Card>{children}</Card>);

    let card = getByText(children);
    expect(card).toBeDefined();

    rerender(<Card busy>{children}</Card>);
    card = getByText('Loading...');
    expect(card).toBeDefined();

    unmount();
  });
});
