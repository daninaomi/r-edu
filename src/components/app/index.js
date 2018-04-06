import React from 'react'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'

import Navbar from '../navbar'
import Home from '../pages/home'
import Login from '../pages/login'
import EsqueciSenha from '../pages/login/esqueciSenha'
import Cadastro from '../pages/cadastro'
import CadastroProfAluno from '../pages/cadastroProfAluno'
import Perfil from '../pages/perfil'
import LandingPage from '../pages/landingPage';
import Escolas from '../pages/escolas';
import Desafios from '../pages/desafios';
import AddTurma from '../pages/escolas/addTurma';
import AddAlunos from '../pages/escolas/addAlunos';
import Turmas from '../pages/escolas/turmas';
import TurmaDesafios from '../pages/escolas/turmas/desafios';
import TurmaAlunos from '../pages/escolas/turmas/alunos';
import AddDesafios from '../pages/escolas/turmas/desafios/addDesafio';
import Questionario from '../questionario'
import Pontuacao from '../pages/pontuacao'
import TurmaAula from '../pages/escolas/turmas/aulas';
import Exercicios from '../pages/escolas/turmas/desafios/exercicios';


const App = () => (
    <React.Fragment>
        <Navbar />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/esqueci-senha" component={EsqueciSenha} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/cadastro-prof-aluno" component={CadastroProfAluno} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/home" component={Home} />
            <Route exact path="/desafios" component={Desafios} />
            <Route exact path="/escolas/:id" component={Escolas} />
            <Route path="/escolas/:id/cadastro-turmas" component={AddTurma} />
            <Route path="/escolas/:id/cadastro-alunos" component={AddAlunos} />
            <Route exact path="/turmas/:id" component={Turmas} />
            <Route exact path="/turmas/:id/desafios" component={TurmaDesafios} />
            <Route exact path="/turmas/:id/alunos" component={TurmaAlunos} />
            <Route path="/turmas/:id/cadastro-desafios" component={AddDesafios} />
            <Route exact path="/turmas/:id/aula/:idAula" component={TurmaAula} />
            <Route exact path="/exercicios" component={Exercicios} />
            <Route path="/questionario" component={Questionario} />
            <Route path="/pontuacao" component={Pontuacao} />
        </Switch>
    </React.Fragment>
)

export default App
