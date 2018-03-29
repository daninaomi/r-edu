import { CADASTRA_DESAFIO, LISTA_DESAFIOS } from "../actions";


export function desafios(estadoAtual = {}, acao) {
    switch (acao.type) {
        case LISTA_DESAFIOS:
        console.log('acao de desafios', acao)
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