import * as React from 'react';

type Size = 'large' | 'medium' | 'small';
type Color = 'surface' | 'primary' | 'secondary' | 'tertiary';

export interface FABProps {
  /**
   * The name of custom css class
   */
  className?: string;
  /**
   * Disabled state of FAB
   */
  disabled?: boolean;
  /**
   * Set the name of material icon
   */
  icon: string;
  /**
   * Set the size of FAB
   */
  size?: Size;
  /**
   * Custom css style
   */
  style?: React.CSSProperties;
  /**
   * Set the color of FAB
   */
  color?: Color;
}

const containerBaseClassName = [
  'material-fab', // main class
  'flex items-center justify-center', // layout classes
  'shadow-3 drop-shadow-3 hover:shadow-4 hover:drop-shadow-4', // box-shadow and drop shadow
  'disabled:shadow-none disabled:drop-shadow-none', // no shadow when disabled
  'disabled:bg-transparent disabled:text-on-surface disabled:opacity-38', // bg and text color when disabled
].join(' ');
const stateLayerBaseClassName = [
  'before:absolute before:w-full before:h-full before:opacity-0', // postion, width, height
  'hover:before:opacity-8', // opacity when hovered
  'focus:before:opacity-12', // opacity when focused
  'active:before:opacity-12', // opacity when actived
  'disabled:before:bg-on-surface disabled:before:opacity-12', // bg color and opacity when disabled
].join(' ');
const iconBaseClassName = 'material-icon';

const containerColorClassname = (color?: Color) => {
  switch (color) {
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
const stateLayerColorClassName = (color?: Color) => {
  switch (color) {
    case 'surface':
      return 'before:bg-primary';
    case 'secondary':
      return 'before:bg-on-secondary-container';
    case 'tertiary':
      return 'before:bg-on-tertiary-container';
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
  const { className, disabled, icon, size, style, color } = props;
  const classNames = [
    className,
    containerBaseClassName,
    stateLayerBaseClassName,
    containerColorClassname(color),
    stateLayerColorClassName(color),
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
  color: 'primary',
};
export default FAB;
