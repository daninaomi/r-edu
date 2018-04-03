import { ADD_PERGUNTAS } from "../actions";

const estadoInicial = {
    perguntas: [{
        codigo: 1,
        texto: "Quem descobriu o Brasil",
        alternativas: [
            {
                codigo: 1,
                opcao: "A",
                texto: "Joãozinho",
                selecionada: false
            },
            {
                codigo: 2,
                opcao: "B",
                texto: "Pedro Alvarez Cabral",
                selecionada: false
            },
            {
                codigo: 3,
                opcao: "C",
                texto: "Pedro Alvarez Cabral",
                selecionada: false
            },
            {
                codigo: 4,
                opcao: "D",
                texto: "Pedro Alvarez Cabral",
                selecionada: false
            },
            {
                codigo: 5,
                opcao: "E",
                texto: "Pedro Alvarez Cabral",
                selecionada: false
            }
        ],
        codigo: 2,
        texto: "Quantos Estados tem o Brasil?",
        alternativas: [
            {
                texto: "Joãozinho",
                selecionada: false
            }
        ]
    }]
}


export function perguntas(estadoAtual = estadoInicial, acao) {

        switch (acao.type) {
        case ADD_PERGUNTAS:
    return {
        ...estadoAtual,
        ...acao.perguntas
    }
        default:
    return estadoAtual
}
}
