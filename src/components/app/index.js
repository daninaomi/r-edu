import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../navbar'
import Home from '../pages/home'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import CadastroProfAluno from '../pages/cadastroProfAluno'
import Perfil from '../pages/perfil'

const App = () => (
    <React.Fragment>
        <Navbar />
        <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/cadastroProfAluno" component={CadastroProfAluno} />
            <Route path="/Perfil" component={Perfil} /> */}

            <Route exact path="/" component={Perfil} />
        </Switch>
    </React.Fragment>
)

export default App
