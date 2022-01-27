import * as React from 'react';

export type Color = 'surface' | 'primary' | 'secondary' | 'tertiary';

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

export interface ButtonProps {
  type: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: string;
}

export interface FabProps extends BaseProps {
  /**
   * Set the color of ExtendedFab
   */
  color?: Color;
  /**
   * Disabled state of ExtendedFab
   */
  disabled?: boolean;
  /**
   * Set the name of material icon
   */
  icon: string;
}

export interface ExtendedFabProps extends Partial<FabProps> {
  /**
   * Set the label text of ExtendedFab
   */
  labelText: string;
}
