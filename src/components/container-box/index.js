import React from 'react'
import './container.css'

const Container = ({ children, ...props}) => (
    <section className="container" {...props}>
        {children}
    </section>
)

export default Container