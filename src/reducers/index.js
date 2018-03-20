import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './user'
import { escolas } from './escolas'
import { turmas } from './turmas'
import { alunos } from './alunos'
import { page } from './navPages'

const reducer = combineReducers({
    user,
    escolas,
    turmas,
    page,
    alunos,
    routing: routerReducer
})

export default reducer