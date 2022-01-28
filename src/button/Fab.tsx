import * as React from 'react';
import { FabProps } from './interfaces';
import { fabClassName, fabIconClassName } from './styles';

const Fab = React.forwardRef<HTMLButtonElement, FabProps>((props, ref) => {
  const { className, icon, size, style, color, ...rest } = props;
  return (
    <button
      className={fabClassName(color, size, className)}
      style={style}
      role="presentation"
      ref={ref}
      {...rest}
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
