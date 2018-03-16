
import {
    LISTA_CARDS,
    ADD_CARD,
    EDIT_CARD
} from '../actions'

const estadoInicial = [
    { 
        id: 0,
        nome: 'Senai'
    },
    { 
        id: 1,
        nome: 'Unesp'
    },
    { 
        id: 2,
        nome: 'E. E. Fulano da Silva'
    }
]

export function escolas (estadoAtual = estadoInicial, acao) {

    switch (acao.type) {
        
        default:
            return estadoAtual
    }
}

// return {
//     ...estadoAtual,
//     ...acao.user
// }



