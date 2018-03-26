import React from 'react'
import classnames from 'classnames'
import './main.css'

const Main = ({ className, children, ...props}) => (
    <main className={classnames("main-page", className)} {...props}>
        {children}
    </main>
)

export default Main