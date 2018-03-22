import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './user'
import { escolas } from './escolas'
import { turmas } from './turmas'
import { alunos } from './alunos'
import { page } from './navPages'
import { desafios } from './desafios'

const reducer = combineReducers({
    user,
    escolas,
    turmas,
    page,
    alunos,
    desafios,
    routing: routerReducer
})

export default reducer