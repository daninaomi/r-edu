import { combineReducers } from 'redux'
import {
    LOGA_USER,
    DESLOGA_USER,
    SELECIONA_USERTYPE,
    CADASTRA_USER
} from '../actions'

const userLogin = (estadoAtual = {}, acao) => {
    switch (acao.type) {
        case LOGA_USER:
            return {
                user: true
            }
        case DESLOGA_USER:
            return {
                user: false
            }
        default:
            return estadoAtual
    }
}

export default userLogin

// const userCadastro = (estadoAtual = {}, acao) => {
//     switch (acao.type) {
//         case SELECIONA_USERTYPE:
//             return {
//                 // userType: estadoAtual.userType
//                 userType === 'professor' ? (
//                     userType = 'professor'
//                 ) : (
//                         userType = 'aluno'
//                     )
//             }
            
//         case CADASTRA_USER:
//             const newUser

//             return {
//                 user: true
//             }
//         default:
//             return estadoAtual
//     }
// }

// const reducer = combineReducers({
//     userLogin,
//     userCadastro
// })

// export default reducer

