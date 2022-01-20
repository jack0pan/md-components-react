import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Display } from '../demos/Typography.stories';

describe('Typography', () => {
  it('renders as Display', () => {
    render(<Display type="display" size="small" {...Display.args} />);
    expect(screen.getAllByText(/display/i)).toHaveLength(3);
  });
});
