import { LISTA_PERGUNTAS } from "../actions";


export function perguntas(estadoAtual = {}, acao) {

    switch (acao.type) {
        case LISTA_PERGUNTAS:
            let novoEstado = {};

            acao.perguntas.forEach(pergunta => (
                novoEstado[pergunta.id] = pergunta
            ))

            return novoEstado
        default:
            return estadoAtual
    }
}