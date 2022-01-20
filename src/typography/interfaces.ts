import * as React from 'react';

export interface TypographyProps {
  type: 'display' | 'headline' | 'title' | 'label' | 'body';
  size: 'large' | 'medium' | 'small';
  children?: React.ReactNode;
}
