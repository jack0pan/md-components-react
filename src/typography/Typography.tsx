import * as React from 'react'
import classNames from 'classnames'
import type { TypographyProps } from './interfaces'

const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(
  (props, ref) => {
    const { children, size, type } = props

    const classPrefix = 'md-typography'
    const classes = classNames(classPrefix, {
      [`${classPrefix}_${type}`]: true,
      [`${classPrefix}_${type}--${size}`]: true
    })
    return (
      <span className={classes} ref={ref}>
        {children}
      </span>
    )
  }
)

Typography.displayName = 'Typography'
Typography.defaultProps = {}

export default Typography
