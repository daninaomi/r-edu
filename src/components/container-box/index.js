import React from 'react'
import './container.css'

const Container = ({ children, ...props}) => (
    <article className="container" {...props}>
        {children}
    </article>
)

export default Container