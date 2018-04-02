
import {
    LOGA_USER,
    DESLOGA_USER,
    SELECIONA_USERTYPE,
    CADASTRA_USER_SUCCESS,
    ALTERA_USER,
    PESQUISA_USERS,
    LISTA_USERS
} from '../actions'

const estadoInicial = JSON.parse(localStorage.getItem('usuario')) || {}

export function user(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {
        case LOGA_USER:
            const usuario = {
                ...estadoAtual,
                ...acao.user,
                logado: true
            }

            localStorage.setItem('usuario', JSON.stringify(usuario))

            return usuario
        case DESLOGA_USER:
            localStorage.removeItem('usuario')
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

        // case PESQUISA_USERS:
        //     let novoEstado = {};

        //     acao.users.forEach(user => (
        //         novoEstado[user.id] = user
        //     ))

        //     return novoEstado

        // case LISTA_USERS:
        //     let novoEstado = {};

        //     acao.users.forEach(user => (
        //         novoEstado[user.id] = user
        //     ))

        //     return novoEstado

        default:
            return estadoAtual
    }
}
