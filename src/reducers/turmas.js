import { 
    CADASTRA_TURMA, 
    LISTA_TURMAS
} from "../actions";


export function turmas(estadoAtual = {}, acao) {

    switch (acao.type) {
        case CADASTRA_TURMA:
            return {
                ...estadoAtual,
                [acao.turma.id]: acao.turma
            }
            
        case LISTA_TURMAS:
            let novoEstado = {};

            acao.turmas.forEach(turma => (
                novoEstado[turma.id] = turma
            ))

            return novoEstado

        default:
            return estadoAtual
    }
}


// const estadoInicial = {
//     0: {
//         id: 0,
//         nome: '6º A',
//         desafios: [0,1],
//         alunos: [0,1,2,3,4]
//     },
//     1: {
//         id: 1,
//         nome: '6º B',
//         desafios: [0],
//         alunos: [0,1,2,3]
//     }

// }



