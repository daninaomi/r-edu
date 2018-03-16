import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './user'
import { escolas } from './escolas'

const reducer = combineReducers({
    user,
    escolas,
    routing: routerReducer
})

export default reducer