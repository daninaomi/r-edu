import React from 'react'
import classnames from 'classnames'
import './container.css'

const Container = ({ className, children, ...props}) => (
    <article className={classnames("container", className)} {...props}>
        {children}
    </article>
)

export default Container