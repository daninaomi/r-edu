import { 
    CADASTRA_DESAFIO, 
    LISTA_DESAFIOS,
    SELECIONA_DESAFIO 
} from "../actions";


export function desafios(estadoAtual = {}, acao) {
    switch (acao.type) {

        case SELECIONA_DESAFIO:
            return {
                ...estadoAtual,
                ...acao.desafio
            }

        case LISTA_DESAFIOS:
        
            let novoEstado = {};
            acao.desafios.forEach(desafio => (
                novoEstado[desafio.id] = desafio
            ))
            return novoEstado

        case CADASTRA_DESAFIO:
            return {
                ...estadoAtual,
                ...acao.desafio
            }
        default:
            return estadoAtual
    }
}


// const estadoInicial = {
//     0: {
//         id: 0,
//         nome: 'Foguete',
//         disciplinas: [0,1]
//     },
//     1: {
//         id: 1,
//         nome: 'Vulcão',
//         disciplinas: []
//     },
//     3: {
//         id: 3,
//         nome: 'Jardim',
//         disciplinas: []
//     }
//     // },
//     // 4: {
//     //     id: 4,
//     //     nome: 'Camera'
//     // }
// }
