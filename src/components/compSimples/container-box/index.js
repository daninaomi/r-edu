import React from 'react'
import classnames from 'classnames'
import './container.css'

const Container = ({ className, children, ...props}) => (
    <section className={classnames("container", className)} {...props}>
        {children}
    </section>
)

export default Container