import React from 'react'
import classNames from 'classnames'
import { ButtonProps } from './interfaces'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { disabled, type, htmlType, children, icon } = props

    const classPrefix = 'md-button'
    const classes = classNames(classPrefix, {
      [`${classPrefix}_${type}`]: true,
      [`${classPrefix}_${type}--disabled`]: disabled,
      [`${classPrefix}-icon`]: icon
    })
    return (
      <button disabled={disabled} type={htmlType} className={classes} ref={ref}>
        {Boolean(icon) && <span className='material-icons md-18'>{icon}</span>}
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
