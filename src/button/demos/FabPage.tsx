// @ts-nocheck
import * as React from 'react';
import { Canvas, Title, Description, Story, ArgsTable, Heading, Subheading } from '@storybook/addon-docs';

export const FabPage: React.VFC<{}> = () => {
  return (
    <>
      <Title>FABs</Title>
      <Description>
        Floating action buttons (FABs) help people take primary actions and are used to represent the most important
        action on a screen.
      </Description>
      <Heading>Demos</Heading>
      <Subheading>Surface</Subheading>
      <Canvas>
        <Story id="components-buttons-fab--surface" />
      </Canvas>
      <Subheading>Primary</Subheading>
      <Canvas>
        <Story id="components-buttons-fab--primary" />
      </Canvas>
      <Subheading>Secondary</Subheading>
      <Canvas>
        <Story id="components-buttons-fab--secondary" />
      </Canvas>
      <Subheading>Tertiary</Subheading>
      <Canvas>
        <Story id="components-buttons-fab--tertiary" />
      </Canvas>
      <Heading>Props</Heading>
      <ArgsTable />
    </>
  );
};
