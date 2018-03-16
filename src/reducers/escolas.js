

const estadoInicial = {
    0: { 
        id: 0,
        nome: 'Senai',
        salas: [0,1]
    },
    1: { 
        id: 1,
        nome: 'Unesp',
        salas: [0]
    },
    2: { 
        id: 2,
        nome: 'E. E. Fulano da Silva',
        salas: [0,1]
    }
}

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



