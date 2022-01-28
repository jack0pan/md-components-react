import * as React from 'react';

export type Variant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
export type Color = 'surface' | 'primary' | 'secondary' | 'tertiary';
export type Size = 'large' | 'medium' | 'small';

interface BaseProps {
  /**
   * The name of custom css class
   */
  className?: string;
  /**
   * Custom css style
   */
  style?: React.CSSProperties;
}

interface IconableProps {
  /**
   * Set the name of material icon
   */
  icon?: string;
}

interface LabelableProps {
  /**
   * Set the label text of button
   */
  labelText?: string;
}

type BaseButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

export interface ButtonProps extends BaseButtonProps, IconableProps, LabelableProps {
  /**
   * Five types of button
   */
  variant?: Variant;
}

export interface FabProps extends BaseButtonProps {
  /**
   * Set the color of button
   */
  color?: Color;
  /**
   * Set the name of material icon
   */
  icon: string;
  /**
   * Set the size of FAB
   */
  size?: Size;
}

export interface ExtendedFabProps extends Partial<Omit<FabProps, 'size'>> {
  /**
   * Set the label text of ExtendedFab
   */
  labelText: string;
}
