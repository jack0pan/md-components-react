import * as React from 'react';
import { ExtendedFabProps } from './interfaces';

const ExtendedFab = React.forwardRef<HTMLButtonElement, ExtendedFabProps>((props, ref) => {
  const { className, icon, color, labelText, ...rest } = props;
  const classPrefix = 'material-extended-fab';
  const classNames = [
    className,
    classPrefix,
    `${classPrefix}--${color}`,
    icon && `${classPrefix}--icon`,
  ];
  return (
    <button className={classNames.join(' ')} ref={ref} {...rest}>
      {icon && <span className={`${classPrefix}__icon material-icon`}>{icon}</span>}
      <span className={`${classPrefix}__label`}>{labelText}</span>
    </button>
  );
});

ExtendedFab.displayName = 'ExtendedFab';
ExtendedFab.defaultProps = {
  color: 'primary',
};
export default ExtendedFab;
