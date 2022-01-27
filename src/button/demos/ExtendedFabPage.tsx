import * as React from 'react';
import {
  Canvas,
  Title,
  Description,
  Story,
  ArgsTable,
  Heading,
  Subheading,
} from '@storybook/addon-docs';

export const ExtendedFabPage: React.VFC<{}> = () => {
  return (
    <>
      <Title>Extended FABs</Title>
      <Description>
        Extended FABs help people take primary actions. They're wider than FABs to accommodate a
        text label and larger target area.
      </Description>
      <Heading>Demos</Heading>
      <Subheading>Surface</Subheading>
      <Canvas>
        <Story id="components-buttons-extendedfab--surface" />
      </Canvas>
      <Subheading>Primary</Subheading>
      <Canvas>
        <Story id="components-buttons-extendedfab--primary" />
      </Canvas>
      <Subheading>Secondary</Subheading>
      <Canvas>
        <Story id="components-buttons-extendedfab--secondary" />
      </Canvas>
      <Subheading>Tertiary</Subheading>
      <Canvas>
        <Story id="components-buttons-extendedfab--tertiary" />
      </Canvas>
      <Heading>Props</Heading>
      <ArgsTable />
    </>
  );
};
