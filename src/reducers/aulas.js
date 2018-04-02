import { CADASTRA_AULA, LISTA_AULAS } from "../actions";


export function aulas(estadoAtual = {}, acao) {
    switch (acao.type) {
        case LISTA_AULAS:

            let novoEstado = {};
            acao.aulas.forEach(aula => (
                novoEstado[aula.id] = aula
            ))
            return novoEstado

        case CADASTRA_AULA:
        console.log('aula', acao)
            return {
                ...estadoAtual,
                [acao.id]: acao.aula
            }
        default:
            return estadoAtual
    }
}
