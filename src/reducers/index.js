import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
    LOGA_USER,
    DESLOGA_USER,
    SELECIONA_USERTYPE,
    CADASTRA_USER_SUCCESS,
    ALTERA_USER
} from '../actions'

const user = (estadoAtual = {
    logado: true, type: 'aluno'
}, acao) => {
    switch (acao.type) {
        case LOGA_USER:
            return {
                ...estadoAtual,
               logado: true
            }
        case DESLOGA_USER:
            return {
                ...estadoAtual,
                logado: false
            }

        case SELECIONA_USERTYPE:
            return {
                ...estadoAtual,
                ...acao.user
            }

        case CADASTRA_USER_SUCCESS:
            return {
                ...estadoAtual,
                ...acao.user
            }
        case ALTERA_USER:
            return {
                ...estadoAtual,
                ...acao.user
            }
        default:
            return estadoAtual
    }
}



const reducer = combineReducers({
    user,
    routing: routerReducer
})

export default reducer

