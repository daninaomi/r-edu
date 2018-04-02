
import {
    LOGA_USER,
    DESLOGA_USER,
    SELECIONA_USERTYPE,
    CADASTRA_USER_SUCCESS,
    ALTERA_USER,
    LISTA_USERS
} from '../actions'

export function user (estadoAtual = 
    {
        ///////////////// PRECISA TIRAR
        logado: true, type: 'professor', id: 1
    }, acao) {

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
        case LISTA_USERS:
            let novoEstado = {};

            acao.users.forEach(user => (
                novoEstado[user.id] = user
            ))

            return novoEstado

        default:
            return estadoAtual
    }
}




