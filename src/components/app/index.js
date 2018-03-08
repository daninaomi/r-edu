import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import Navbar from '../navbar'

const App = () => (
    <React.Fragment>
        <Navbar />
        <Login />
    </React.Fragment>
)

export default App
