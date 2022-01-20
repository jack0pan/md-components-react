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

export const ButtonPage: React.VFC<{}> = () => {
  return (
    <>
      <Title>Buttons</Title>
      <Description>
        Buttons help people take action, such as sending an email, sharing a document, or liking a
        comment.
      </Description>
      <Heading>Demos</Heading>
      <Subheading>Filled buttons</Subheading>
      <Canvas>
        <Story id="components-button--filled" />
      </Canvas>
      <Subheading>Outline buttons</Subheading>
      <Canvas>
        <Story id="components-button--outlined" />
      </Canvas>
      <Subheading>Text buttons</Subheading>
      <Canvas>
        <Story id="components-button--text" />
      </Canvas>
      <Subheading>Elevated buttons</Subheading>
      <Canvas>
        <Story id="components-button--elevated" />
      </Canvas>
      <Subheading>Tonal buttons</Subheading>
      <Canvas>
        <Story id="components-button--tonal" />
      </Canvas>
      <Heading>Props</Heading>
      <ArgsTable />
    </>
  );
};
