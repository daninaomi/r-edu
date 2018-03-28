

const estadoInicial = {
    1: { 
        id: 1,
        nome: 'Senai',
        turmas: [0,1]
    },
    2: { 
        id: 2,
        nome: 'Unesp',
        turmas: [0]
    },
    3: { 
        id: 3,
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



