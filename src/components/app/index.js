import React from 'react'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'

import Navbar from '../navbar'
import Home from '../pages/home'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import CadastroProfAluno from '../pages/cadastroProfAluno'
import Perfil from '../pages/perfil'
import LandingPage from '../pages/landingPage';
import Escolas from '../pages/escolas';
import AddSala from '../pages/escolas/addSala';
import AddAlunos from '../pages/escolas/addAlunos';
import Salas from '../pages/escolas/salas';


const App = () => (
    <React.Fragment>
        <Navbar />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/cadastro-prof-aluno" component={CadastroProfAluno} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/home" component={Home} />
            <Route exact path="/escolas/:id" component={Escolas} />
            <Route path="/escolas/:id/cadastro-salas" component={AddSala} />
            <Route path="/salas/:id/cadastro-alunos" component={AddAlunos} />
            <Route exact path="/salas/:id" component={Salas} />

        </Switch>
    </React.Fragment>
)

export default App
