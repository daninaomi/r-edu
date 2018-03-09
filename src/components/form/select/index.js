import React from 'react'
import classnames from 'classnames'
import './select.css'


const Select = ({ className, children, ...props }) => (
    <select className="form-select" {...props}>
        {children}
    </select>
)

export default Select