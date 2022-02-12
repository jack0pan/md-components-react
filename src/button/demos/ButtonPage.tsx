import * as React from "react";
import { Canvas, Title, Description, Story, ArgsTable, Heading, Subheading } from "@storybook/addon-docs";

export const ButtonPage: React.VFC<{}> = () => {
  return (
    <>
      <Title>Common buttons</Title>
      <Description>
        Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.
      </Description>
      <Heading>Demos</Heading>
      <Subheading>Elevated buttons</Subheading>
      <Canvas>
        <Story id="components-buttons-common-buttons--elevated" />
      </Canvas>
      <Subheading>Filled buttons</Subheading>
      <Canvas>
        <Story id="components-buttons-common-buttons--filled" />
      </Canvas>
      <Subheading>Tonal buttons</Subheading>
      <Canvas>
        <Story id="components-buttons-common-buttons--tonal" />
      </Canvas>
      <Subheading>Outline buttons</Subheading>
      <Canvas>
        <Story id="components-buttons-common-buttons--outlined" />
      </Canvas>
      <Subheading>Text buttons</Subheading>
      <Canvas>
        <Story id="components-buttons-common-buttons--text" />
      </Canvas>
      <Heading>Props</Heading>
      <ArgsTable />
    </>
  );
};
