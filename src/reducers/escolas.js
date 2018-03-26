

const estadoInicial = {
    0: { 
        id: 0,
        nome: 'Senai',
        turmas: [0,1]
    },
    1: { 
        id: 1,
        nome: 'Unesp',
        turmas: [0]
    },
    2: { 
        id: 2,
        nome: 'E. E. Fulano da Silva',
        turmas: [0,1]
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



