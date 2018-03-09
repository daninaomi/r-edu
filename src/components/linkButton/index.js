import React from 'react'
import { Link } from 'react-router-dom'
import '../form/formButton/button.css'

const LinkButton = ({ children, ...props}) => (
    <Link className="form-button--outline" {...props}>
        {children}
    </Link>
)

export default LinkButton

// const LinkButton = ({ children, ...props}) => (
//     <Link className="form-button--outline" {...props}>
//         {children}
//     </Link>
// )