import * as React from 'react';

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
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
}

export interface FabProps extends BaseButtonProps, IconableProps {
  /**
   * Set the color of button
   */
  color?: 'surface' | 'primary' | 'secondary' | 'tertiary';
  /**
   * Set the size of button
   */
  size?: 'large' | 'medium' | 'small';
}

export interface ExtendedFabProps extends Partial<Omit<FabProps, 'size'>>, LabelableProps {}
