import * as React from 'react';

type Size = 'large' | 'medium' | 'small';
type Variant = 'surface' | 'primary' | 'secondary' | 'tertiary';

export interface FABProps {
  className?: string;
  disabled?: boolean;
  icon: string;
  size?: Size;
  style?: React.CSSProperties;
  variant?: Variant;
}

const containerBaseClassName = [
  'material-fab',
  'flex items-center justify-center',
  'shadow drop-shadow',
  'disabled:shadow-none disabled:drop-shadow-none',
  'disabled:bg-transparent disabled:text-on-surface disabled:opacity-38',
].join(' ');
const stateLayerBaseClassName = [
  'before:absolute before:w-full before:h-full before:opacity-0',
  'hover:before:opacity-8',
  'focus:before:opacity-12',
  'active:before:opacity-12',
  'disabled:before:bg-on-surface disabled:before:opacity-12',
].join(' ');
const iconBaseClassName = 'material-icon';

const containerVariantClassname = (variant?: Variant) => {
  switch (variant) {
    case 'surface':
      return 'bg-surface text-primary';
    case 'secondary':
      return 'bg-secondary-container text-on-secondary-container';
    case 'tertiary':
      return 'bg-tertiary-container text-on-tertiary-container';
    case 'primary':
    default:
      return 'bg-primary-container text-on-primary-container';
  }
};
const stateLayerVariantClassName = (variant?: Variant) => {
  switch (variant) {
    case 'surface':
      return 'before:bg-primary';
    case 'secondary':
      return 'before:bg-on-secondary-container';
    case 'tertiary':
      return 'before:bg-on-terriary-container';
    case 'primary':
    default:
      return 'before:bg-on-primary-container';
  }
};

const containerSizeClassName = (size?: Size) => {
  switch (size) {
    case 'small':
      return 'w-10 h-10 rounded-[14px] before:rounded-[14px]';
    case 'large':
      return 'w-24 h-24 rounded-[28px] before:rounded-[28px]';
    default:
      return 'w-14 h-14 rounded-[16px] before:rounded-[16px]';
  }
};
const iconSizeClassName = (size?: Size) => {
  switch (size) {
    case 'large':
      return 'text-[36px]';
    case 'small':
    case 'medium':
    default:
      return 'text-[24px]';
  }
};
const FAB = React.forwardRef<HTMLButtonElement, FABProps>((props, ref) => {
  const { className, disabled, icon, size, style, variant } = props;
  const classNames = [
    className,
    containerBaseClassName,
    stateLayerBaseClassName,
    containerVariantClassname(variant),
    stateLayerVariantClassName(variant),
    containerSizeClassName(size),
  ];
  return (
    <button
      className={classNames.join(' ')}
      style={style}
      disabled={disabled}
      type="button"
      role="presentation"
      ref={ref}
    >
      <span className={`${iconBaseClassName} ${iconSizeClassName(size)}`}>{icon}</span>
    </button>
  );
});

FAB.displayName = 'FAB';
FAB.defaultProps = {
  size: 'medium',
  variant: 'primary',
};
export default FAB;
