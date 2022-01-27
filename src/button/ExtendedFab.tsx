import * as React from 'react';
import { Color, ExtendedFabProps } from './interfaces';

const baseClassName = 'material-extended-fab';
const containerBaseClassName = [
  baseClassName, // main class
  'h-14 w-fit min-w-20 pl-[16px] pr-[20px] flex items-center gap-x-2 rounded-[16px] before:rounded-[16px]', // layout classes
  'text-[14px] leading-[20px] font-medium', // text classes
  'shadow-3 drop-shadow-3 hover:shadow-4 hover:drop-shadow-4', // box-shadow and drop shadow
  'disabled:shadow-none disabled:drop-shadow-none', // no shadow when disabled
  'disabled:bg-transparent disabled:text-on-surface disabled:opacity-38', // bg and text color when disabled
].join(' ');
const stateLayerBaseClassName = [
  'before:absolute before:left-0 before:w-full before:h-full before:opacity-0', // postion, width, height
  'hover:before:opacity-8', // opacity when hovered
  'focus:before:opacity-12', // opacity when focused
  'active:before:opacity-12', // opacity when actived
  'disabled:before:bg-on-surface disabled:before:opacity-12', // bg color and opacity when disabled
].join(' ');
const iconBaseClassName = `${baseClassName}__icon material-icon`;
const labelTextBaseClassName = `${baseClassName}__label-text ml-[4px]`;

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

const ExtendedFab = React.forwardRef<HTMLButtonElement, ExtendedFabProps>((props, ref) => {
  const { className, disabled, icon, style, color, labelText } = props;
  const classNames = [
    className,
    containerBaseClassName,
    stateLayerBaseClassName,
    containerColorClassname(color),
    stateLayerColorClassName(color),
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
      {icon && <span className={`${iconBaseClassName}`}>{icon}</span>}
      <span className={labelTextBaseClassName}>{labelText}</span>
    </button>
  );
});

ExtendedFab.displayName = 'ExtendedFab';
ExtendedFab.defaultProps = {
  color: 'primary',
};
export default ExtendedFab;
