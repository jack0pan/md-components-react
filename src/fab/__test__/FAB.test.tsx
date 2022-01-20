import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Surface, Primary, Secondary, Tertiary } from '../demos/FAB.stories';

describe('FAB', () => {
  it('renders all variants', () => {
    const { rerender } = render(<Surface icon="edit" {...Surface.args} />);
    let buttons = screen.getAllByRole('presentation');
    expect(buttons).toHaveLength(2);
    expect(buttons[0].className).toContain('bg-surface');

    rerender(<Primary icon="edit" {...Primary.args} />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('bg-primary-container');

    rerender(<Secondary icon="edit" {...Secondary.args} />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('bg-secondary-container');

    rerender(<Tertiary icon="edit" {...Tertiary.args} />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('bg-tertiary-container');
  });

  it('renders all sizes', () => {
    const { rerender } = render(<Surface icon="edit" {...Surface.args} />);
    let buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('w-14');

    rerender(<Surface icon="edit" {...Surface.args} size="small" />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('w-10');

    rerender(<Surface icon="edit" {...Surface.args} size="large" />);
    buttons = screen.getAllByRole('presentation');
    expect(buttons[0].className).toContain('w-24');
  });
});
