import * as React from 'react';
import { ButtonProps } from './interfaces';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, style, variant, icon, labelText, ...rest } = props;

  const classPrefix = 'material-btn';
  const classNames = [
    className,
    classPrefix,
    `${classPrefix}_${variant}`,
    icon && `${classPrefix}--icon`,
  ];
  return (
    <button className={classNames.join(' ')} style={style} ref={ref} {...rest}>
      {icon && <span className={`${classPrefix}__icon material-icon text-[18px]`}>{icon}</span>}
      {labelText && <span className={`${classPrefix}__label ml-[8px]`}>{labelText}</span>}
    </button>
  );
});

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'filled',
  type: 'button',
  disabled: false,
};

export default Button;
