import {
    LOGA_USER,
    DESLOGA_USER
} from '../actions'

export default function user(estadoAtual = {}, acao) {
    switch(acao.type) {
        case LOGA_USER:
            return {
                user: true
            }
        case DESLOGA_USER:
            return {
                user: true
            }
        default:
            return estadoAtual
    }
}