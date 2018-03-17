
import {
    LOGA_USER,
    DESLOGA_USER,
    SELECIONA_USERTYPE,
    CADASTRA_USER_SUCCESS,
    ALTERA_USER
} from '../actions'

export function user (estadoAtual = 
    {
    logado: true, type: 'professor'
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
        default:
            return estadoAtual
    }
}



