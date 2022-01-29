import * as React from 'react';
import { FabProps } from './interfaces';

const Fab = React.forwardRef<HTMLButtonElement, FabProps>((props, ref) => {
  const { className, icon, size, style, color, ...rest } = props;
  const classPrefix = 'material-fab';
  const classNames = [
    className,
    classPrefix,
    `${classPrefix}--${color}`,
    `${classPrefix}--${size}`,
  ];
  return (
    <button className={classNames.join(' ')} style={style} ref={ref} {...rest}>
      <span className={`${classPrefix}__icon material-icon`}>{icon}</span>
    </button>
  );
});

Fab.displayName = 'Fab';
Fab.defaultProps = {
  size: 'medium',
  color: 'primary',
};
export default Fab;
