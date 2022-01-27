import { Color, Size } from './interfaces';

const fabContainerShadowClassName = [
  'shadow-3 drop-shadow-3 hover:shadow-4 hover:drop-shadow-4', // box-shadow and drop shadow
  'disabled:shadow-none disabled:drop-shadow-none', // no shadow when disabled
  'disabled:bg-transparent disabled:text-on-surface disabled:opacity-38', // bg and text color when disabled
].join(' ');

const fabStateLayerClassName = [
  'before:absolute before:w-full before:h-full before:opacity-0', // postion, width, height
  'hover:before:opacity-8 focus:before:opacity-12 active:before:opacity-12', // set opacity when state changed
  'disabled:before:bg-on-surface disabled:before:opacity-12', // bg color and opacity when disabled
].join(' ');

const fabContainerColorClassname = (color?: Color) => {
  if (color === 'surface') {
    return 'bg-surface text-primary';
  }
  return `bg-${color}-container text-on-${color}-container`;
};

const fabStateLayerColorClassName = (color?: Color) => {
  if (color === 'surface') {
    return 'before:bg-primary';
  }
  return `before:bg-on-${color}-container`;
};

const fabContainerSizeClassName = (size?: Size) => {
  switch (size) {
    case 'small':
      return 'w-10 h-10 rounded-[14px] before:rounded-[14px]';
    case 'large':
      return 'w-24 h-24 rounded-[28px] before:rounded-[28px]';
    default:
      return 'w-14 h-14 rounded-[16px] before:rounded-[16px]';
  }
};

const fabIconSizeClassName = (size?: Size) => {
  if (size === 'large') {
    return 'text-[36px]';
  }
  return 'text-[24px]';
};

const iconClassName = 'material-icon';
const fabBaseClassName = 'material-fab';
export const fabClassName = (color?: Color, size?: Size, className?: string) => {
  return [
    className,
    fabBaseClassName, // main class
    'flex items-center justify-center', // layout classes
    fabContainerShadowClassName,
    fabStateLayerClassName,
    fabContainerColorClassname(color),
    fabContainerSizeClassName(size),
    fabStateLayerColorClassName(color),
    fabContainerSizeClassName(size),
  ].join(' ');
};

export const fabIconClassName = (size?: Size) => {
  return [`${fabBaseClassName}__icon ${iconClassName}`, fabIconSizeClassName(size)].join(' ');
};

const extendedFabBaseClassName = 'material-extend-fab';
export const extendedFabClassName = (color?: Color, className?: string) => {
  return [
    className,
    extendedFabBaseClassName, // main class
    'h-14 w-fit min-w-20 pl-[16px] pr-[20px] flex items-center gap-x-2 rounded-[16px] before:rounded-[16px]', // layout classes
    'text-[14px] leading-[20px] font-medium', // text classes
    fabContainerShadowClassName,
    fabStateLayerClassName,
    fabContainerColorClassname(color),
    fabStateLayerColorClassName(color),
  ].join(' ');
};
export const extendedFabIconClassName = () => `${extendedFabBaseClassName}__icon ${iconClassName}`;
export const extendedFabLabelTextClassName = () =>
  `${extendedFabBaseClassName}__label-text ml-[4px]`;
