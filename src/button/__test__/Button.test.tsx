import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Filled } from '../demos/Button.stories';

describe('Button', () => {
  it('renders all kinds of styles', () => {
    render(<Filled {...Filled.args} />);
    expect(screen.getAllByText(/enabled/i)).toHaveLength(2);
    expect(screen.getAllByText(/add/i)).toHaveLength(2);
  });
});
