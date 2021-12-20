import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  type: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  children?: React.ReactNode
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { disabled, type, htmlType, children } = props

    const classPrefix = 'md-button'
    const classes = classNames(classPrefix, {
      [`${classPrefix}_${type}`]: true,
      [`${classPrefix}_${type}--disabled`]: disabled
    })
    return (
      <button disabled={disabled} type={htmlType} className={classes} ref={ref}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
Button.defaultProps = {
  htmlType: 'button',
  disabled: false
}

export default Button
