import * as React from 'react';
import { Canvas, Title, Description, Story } from '@storybook/addon-docs';

const ColorSystemPage = () => (
  <>
    <Title>Color system</Title>
    <Description>
      Use color to create meaningful experiences while also expressing hierarchy, state, and brand identity.
    </Description>
    <Canvas>
      <Story id="styles-color-system--primary" />
      <Story id="styles-color-system--secondary" />
      <Story id="styles-color-system--tertiary" />
      <Story id="styles-color-system--error" />
      <Story id="styles-color-system--netural" />
      <Story id="styles-color-system--netural-variant" />
    </Canvas>
  </>
);

export default ColorSystemPage;
