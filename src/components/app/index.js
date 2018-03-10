import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import Navbar from '../navbar'
import Cadastro from '../pages/cadastro'
import CadastroProfAluno from '../pages/cadastroProfAluno'

const App = () => (
    <React.Fragment>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/cadastroProfAluno" component={CadastroProfAluno} />
        </Switch>
    </React.Fragment>
)

export default App
