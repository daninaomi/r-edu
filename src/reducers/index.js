// import { combineReducers } from 'redux'
import {
    LOGA_USER,
    DESLOGA_USER,
    SELECIONA_USERTYPE,
    CADASTRA_USER_SUCCESS,
    ALTERA_USER
} from '../actions'

const userLogin = (estadoAtual = {
    user: {
        logado: false
    }
}, acao) => {
    switch (acao.type) {
        case LOGA_USER:
            return {
                ...estadoAtual,
                user: {
                    ...estadoAtual.user,
                    logado: true
                }
            }
        case DESLOGA_USER:
            return {
                ...estadoAtual,
                user: {
                    ...estadoAtual.user,
                    logado: false
                }
            }

        case SELECIONA_USERTYPE:
            return {
                ...estadoAtual,
                user: {
                    ...estadoAtual.user,
                    ...acao.user
                }
            }

        case CADASTRA_USER_SUCCESS:
            return {
                ...estadoAtual,
                user: {
                    ...estadoAtual.user,
                    ...acao.user
                }
            }
        case ALTERA_USER:
            return {
                ...estadoAtual,
                user: {
                    ...estadoAtual.user,
                    ...acao.user
                }
            }
        default:
            return estadoAtual
    }
}

export default userLogin


// const reducer = combineReducers({
//     userLogin,
//     userCadastro
// })

// export default reducer

