import { LISTA_DISCIPLINAS } from "../actions";


export function disciplinas(estadoAtual = {}, acao) {

    switch (acao.type) {
        case LISTA_DISCIPLINAS:
            let novoEstado = {};
            acao.disciplinas.forEach(disciplina => (
                novoEstado[disciplina.id] = disciplina
            ))
            return novoEstado
        default:
            return estadoAtual
    }
}

// const estadoInicial = {
//     0: {
//         id: 0,
//         nome: 'Física'
//     },
//     1: {
//         id: 1,
//         nome: 'Matemática'
//     },
//     3: {
//         id: 3,
//         nome: 'Química'
//     }
// }
