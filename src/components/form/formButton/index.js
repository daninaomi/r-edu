import React from 'react'
import classnames from 'classnames'
import './button.css'


const FormButton = ({ className, children, ...props }) => (
    <button className={classnames(
        "form-button",
        this.props.className,
        { "form-button--outline": outline
        //     ,"form-button--secondary": secondary,
        //     "form-button--secondary-outline": secondaryoutline
        }
    )} {...props}>
        {children}
    </button>
)

export default FormButton