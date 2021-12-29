import * as React from 'react'
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

const Template: (name: string) => React.ReactNode = (name: string) => (
  <div className='color-guidance'>
    <div className={`color-guidance_${name}`} />
    <div className={`color-guidance_on-${name}`} />
    <div className={`color-guidance_${name}-container`} />
    <div className={`color-guidance_on-${name}-container`} />
  </div>
)

export const Primary: React.ReactNode = () => { return Template('primary') }

export const Secondary: React.ReactNode = () => { return Template('secondary') }

export const Tertiary: React.ReactNode = () => { return Template('tertiary') }

export const Error: React.ReactNode = () => { return Template('error') }

export default meta
