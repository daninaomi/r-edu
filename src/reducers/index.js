import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './user'
import { escolas } from './escolas'
import { salas } from './salas'

const reducer = combineReducers({
    user,
    escolas,
    salas,
    routing: routerReducer
})

export default reducer