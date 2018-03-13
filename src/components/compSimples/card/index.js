import React from 'react'
import './card.css'

const Card = ({ children, ...props }) => (
    <article className="card" {...props}>
        {children}
    </article >
)

export default Card