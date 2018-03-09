import React from 'react'
import './main.css'

const Main = ({ children, ...props}) => (
    <main className="main-page" {...props}>
        {children}
    </main>
)

export default Main