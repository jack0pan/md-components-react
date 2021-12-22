import React from 'react'
import { ColorGuidancePage } from './ColorGuidancePage'

import './ColorGuidance.stories.scss'

const meta = {
  title: 'Styles/Color Guidance',
  parameters: {
    docs: {
      page: ColorGuidancePage
    }
  }
}

export const Primary: React.ReactNode = () => (
  <div className='color-guidance'>
    <div className='color-guidance_primary' />
    <div className='color-guidance_on-primary' />
    <div className='color-guidance_primary-container' />
    <div className='color-guidance_on-primary-container' />
  </div>
)

export const Secondary: React.ReactNode = () => (
  <div className='color-guidance'>
    <div className='color-guidance_secondary' />
    <div className='color-guidance_on-secondary' />
    <div className='color-guidance_secondary-container' />
    <div className='color-guidance_on-secondary-container' />
  </div>
)

export const Tertiary: React.ReactNode = () => (
  <div className='color-guidance'>
    <div className='color-guidance_tertiary' />
    <div className='color-guidance_on-tertiary' />
    <div className='color-guidance_tertiary-container' />
    <div className='color-guidance_on-tertiary-container' />
  </div>
)

export const Error: React.ReactNode = () => (
  <div className='color-guidance'>
    <div className='color-guidance_error' />
    <div className='color-guidance_on-error' />
    <div className='color-guidance_error-container' />
    <div className='color-guidance_on-error-container' />
  </div>
)

export default meta
