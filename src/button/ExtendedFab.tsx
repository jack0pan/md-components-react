import * as React from 'react';
import { ExtendedFabProps } from './interfaces';
import {
  extendedFabClassName,
  extendedFabIconClassName,
  extendedFabLabelTextClassName,
} from './styles';

const ExtendedFab = React.forwardRef<HTMLButtonElement, ExtendedFabProps>((props, ref) => {
  const { className, disabled, icon, style, color, labelText } = props;
  return (
    <button
      className={extendedFabClassName(color, className)}
      style={style}
      disabled={disabled}
      type="button"
      role="presentation"
      ref={ref}
    >
      {icon && <span className={extendedFabIconClassName()}>{icon}</span>}
      <span className={extendedFabLabelTextClassName()}>{labelText}</span>
    </button>
  );
});

ExtendedFab.displayName = 'ExtendedFab';
ExtendedFab.defaultProps = {
  color: 'primary',
};
export default ExtendedFab;
