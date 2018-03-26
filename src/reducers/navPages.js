
import { PUSH_PAGE } from "../actions"

const estadoInicial = ''

export function page(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {

        case PUSH_PAGE:
            return acao.page
            
        default:
            return estadoAtual
    }
}