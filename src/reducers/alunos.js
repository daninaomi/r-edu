import { LISTA_ALUNOS } from "../actions";


export function alunos(estadoAtual = {}, acao) {
    switch (acao.type) {
        case LISTA_ALUNOS:
            let novoEstado = {};

            acao.alunos.forEach(aluno => (
                novoEstado[aluno.id] = aluno
            ))

            return novoEstado
        default:
            return estadoAtual
    }
}


// const estadoInicial = {
//     1: {
//         id: 1,
//         nome: 'Danielle',
//         sobrenome: 'Nakatsu',
//         email: 'daninaomi93@gmail.com'

//     },
//     2: {
//         id: 2,
//         nome: 'Camila',
//         sobrenome: 'Belo',
//         email: 'camilabelo@gmail.com'

//     }
// }

// export function alunos(estadoAtual = estadoInicial, acao) {

//     switch (acao.type) {
//         default:
//             return estadoAtual
//     }
// }