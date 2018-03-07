import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/login'

const App = () => (
    <React.Fragment>
        <Login />
    </React.Fragment>
)

export default App

    // < Navbar />
    // <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/quem-somos" render={AboutUs} />
    //     <Route path="/contato" component={Contact} />
    //     <Route path="/login" component={Login} />
    //     <Route component={NotFound} />
    // </Switch>