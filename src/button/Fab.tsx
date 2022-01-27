import * as React from 'react';
import { FabProps } from './interfaces';
import { fabClassName, fabIconClassName } from './styles';

const Fab = React.forwardRef<HTMLButtonElement, FabProps>((props, ref) => {
  const { className, disabled, icon, size, style, color } = props;
  return (
    <button
      className={fabClassName(color, size, className)}
      style={style}
      disabled={disabled}
      type="button"
      role="presentation"
      ref={ref}
    >
      <span className={fabIconClassName(size)}>{icon}</span>
    </button>
  );
});

Fab.displayName = 'Fab';
Fab.defaultProps = {
  size: 'medium',
  color: 'primary',
};
export default Fab;
