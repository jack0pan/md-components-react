import * as React from 'react';
import ColorSystemPage from './ColorSystemPage';

import './ColorSystem.stories.css';

const meta = {
  title: 'Styles/Color system',
  parameters: {
    docs: {
      page: ColorSystemPage,
    },
  },
};

export const Primary = () => (
  <>
    <span className="color-system-block bg-primary text-on-primary">Primary</span>
    <span className="color-system-block bg-on-primary text-primary">On Primary</span>
    <span className="color-system-block bg-primary-container text-on-primary-container">Primary Container</span>
    <span className="color-system-block bg-on-primary-container text-primary-container">On Primary Container</span>
  </>
);

export const Secondary = () => (
  <>
    <span className="color-system-block bg-secondary text-on-secondary">Secondary</span>
    <span className="color-system-block bg-on-secondary text-secondary">On Secondary</span>
    <span className="color-system-block bg-secondary-container text-on-secondary-container">Secondary Container</span>
    <span className="color-system-block bg-on-secondary-container text-secondary-container">
      On Secondary Container
    </span>
  </>
);

export const Tertiary = () => (
  <>
    <span className="color-system-block bg-tertiary text-on-tertiary">Tertiary</span>
    <span className="color-system-block bg-on-tertiary text-tertiary">On Tertiary</span>
    <span className="color-system-block bg-tertiary-container text-on-tertiary-container">Tertiary Container</span>
    <span className="color-system-block bg-on-tertiary-container text-tertiary-container">On Tertiary Container</span>
  </>
);

export const Error = () => (
  <>
    <span className="color-system-block bg-error text-on-error">Error</span>
    <span className="color-system-block bg-on-error text-error">On Error</span>
    <span className="color-system-block bg-error-container text-on-error-container">Error Container</span>
    <span className="color-system-block bg-on-error-container text-error-container">On Error Container</span>
  </>
);

export const Netural = () => (
  <>
    <span className="color-system-block bg-background text-on-background">Background</span>
    <span className="color-system-block bg-on-background text-background">On Background</span>
    <span className="color-system-block bg-surface text-on-surface">Surface</span>
    <span className="color-system-block bg-on-surface text-surface">On Surface</span>
  </>
);

export const NeturalVariant = () => (
  <>
    <span className="color-system-block bg-surface-variant text-on-surface-variant">Surface Variant</span>
    <span className="color-system-block bg-on-surface-variant text-surface-variant">On Surface Variant</span>
    <span style={{ width: 432 }} className="color-system-block bg-outline text-background">
      Outline
    </span>
  </>
);

export default meta;
