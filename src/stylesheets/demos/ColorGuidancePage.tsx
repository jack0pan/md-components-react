import * as React from 'react';
import { Canvas, Title, Description, Story, Heading } from '@storybook/addon-docs';

export const ColorGuidancePage: React.VFC<{}> = () => {
  return (
    <>
      <Title>Color Guidance</Title>
      <Description>
        Use color to create meaningful experiences while also expressing hierarchy, state, and brand
        identity.
      </Description>
      <Heading>Primary</Heading>
      <Canvas>
        <Story id="styles-color-guidance--primary" />
      </Canvas>
      <Heading>Secondary</Heading>
      <Canvas>
        <Story id="styles-color-guidance--secondary" />
      </Canvas>
      <Heading>Tertiary</Heading>
      <Canvas>
        <Story id="styles-color-guidance--tertiary" />
      </Canvas>
      <Heading>Error</Heading>
      <Canvas>
        <Story id="styles-color-guidance--error" />
      </Canvas>
    </>
  );
};
