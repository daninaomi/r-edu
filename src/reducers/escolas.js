
import { LISTA_ESCOLAS } from "../actions";


export function escolas (estadoAtual = {}, acao) {
    switch (acao.type) {
        case LISTA_ESCOLAS:
            let novoEstado = {};

            acao.escolas.forEach(escola => (
                novoEstado[escola.id] = escola
            ))

            return novoEstado
        default:
            return estadoAtual
    }
}

// const estadoInicial = {
//     1: { 
//         id: 1,
//         nome: 'Senai',
//         turmas: [0,1]
//     },
//     2: { 
//         id: 2,
//         nome: 'Unesp',
//         turmas: [0]
//     },
//     3: { 
//         id: 3,
//         nome: 'E. E. Fulano da Silva',
//         turmas: [0,1]
//     }
// }