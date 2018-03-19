import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './user'
import { escolas } from './escolas'
import { salas } from './salas'
import { alunos } from './alunos'
import { page } from './navPages'

const reducer = combineReducers({
    user,
    escolas,
    salas,
    page,
    routing: routerReducer
})

export default reducer