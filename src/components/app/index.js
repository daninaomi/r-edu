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
import AddTurma from '../pages/escolas/addTurma';
import AddAlunos from '../pages/escolas/addAlunos';
import Turmas from '../pages/escolas/turmas';


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
            <Route path="/escolas/:id/cadastro-turmas" component={AddTurma} />
            <Route path="/escolas/:id/cadastro-alunos" component={AddAlunos} />
            <Route exact path="/turmas/:id" component={Turmas} />

        </Switch>
    </React.Fragment>
)

export default App
