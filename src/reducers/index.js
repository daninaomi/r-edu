import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './user'
import { card } from './card'

const reducer = combineReducers({
    user,
    card,
    routing: routerReducer
})

export default reducer