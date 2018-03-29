import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './user'
import { escolas } from './escolas'
import { turmas } from './turmas'
import { alunos } from './alunos'
import { page } from './navPages'
import { desafios } from './desafios'
import { turmaAluno } from './turmaAluno'
import { disciplinas } from './disciplinas'
import { aulas } from './aulas'

const reducer = combineReducers({
    user,
    escolas,
    turmas,
    page,
    alunos,
    desafios,
    turmaAluno,
    disciplinas,
    aulas,
    routing: routerReducer
})

export default reducer
