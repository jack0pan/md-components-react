import React from 'react'
import {
  Canvas,
  Title,
  Description,
  Story,
  ArgsTable,
  Heading
} from '@storybook/addon-docs'

export const TypographyPage: React.VFC<{}> = () => {
  return (
    <>
      <Title>Typography</Title>
      <Description>Use typography to present your design and content as clearly and efficiently as possible.</Description>
      <Heading>Demos</Heading>
      <Canvas>
        <Story id='styles-typography--display' />
      </Canvas>
      <Canvas>
        <Story id='styles-typography--headline' />
      </Canvas>
      <Canvas>
        <Story id='styles-typography--title' />
      </Canvas>
      <Canvas>
        <Story id='styles-typography--label' />
      </Canvas>
      <Canvas>
        <Story id='styles-typography--body' />
      </Canvas>
      <Heading>Props</Heading>
      <ArgsTable />
    </>
  )
}
