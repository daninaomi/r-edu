// import { combineReducers } from 'redux'
import {
    LOGA_USER,
    DESLOGA_USER,
    SELECIONA_USERTYPE,
    CADASTRA_USER_SUCCESS
} from '../actions'

const userLogin = (estadoAtual = {
    user: {
        logado: false
    }
}, acao) => {
    switch (acao.type) {
        case LOGA_USER:
            return {
                user: true
            }
        case DESLOGA_USER:
            return {
                user: false
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

