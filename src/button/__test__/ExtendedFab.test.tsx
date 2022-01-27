import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Surface, Primary, Secondary, Tertiary } from '../demos/ExtendedFab.stories';

describe('ExtendedFab', () => {
  it('renders all colors', () => {
    const { rerender } = render(<Surface labelText="Extended FAB" {...Surface.args} />);
    let buttons = screen.getAllByRole('presentation');
    expect(buttons).toHaveLength(3);
    expect(buttons[0].className).toContain('bg-surface');

    rerender(<Primary labelText="Extended FAB" {...Primary.args} />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('bg-primary-container');

    rerender(<Secondary labelText="Extended FAB" {...Secondary.args} />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('bg-secondary-container');

    rerender(<Tertiary labelText="Extended FAB" {...Tertiary.args} />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('bg-tertiary-container');
  });
});
