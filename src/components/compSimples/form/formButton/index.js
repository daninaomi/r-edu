import React from 'react'
import classnames from 'classnames'
import './button.css'


const FormButton = ({ className, outline, children, ...props }) => (
    <button className={classnames(
        "form-button",
        className,
        {
            "form-button--outline": outline
            //     ,"form-button--secondary": secondary,
            //     "form-button--secondary-outline": secondaryoutline
        }
    )} {...props}>
        {children}
    </button>
)

export default FormButton