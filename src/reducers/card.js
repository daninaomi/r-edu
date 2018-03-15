
// import {
//     LISTA_CARDS,
//     ADD_CARD,
//     EDIT_CARD
// } from '../actions'
// import Card from '../components/card'


// export function card (estadoAtual = [], acao) {

//     switch (acao.type) {
//         case LISTA_CARDS:
//         return acao.lista.map(({ nomeCard}) => {
//             return new Card(nomeCard)
//         })
//         case ADD_CARD:
//             const novoCard = new Card(acao.posicao, acao.nomeCard)
//             return estadoAtual.concat(novoCard)

//         case EDIT_CARD:
//             return estadoAtual.map(cardAtual => {
//                 if (cardAtual.posicao === acao.posicao) {
//                     return new Card(cardAtual.posicao, cardAtual.nomeCard)
//                 } else {
//                     return cardAtual
//                 }
//             })

//         default:
//             return estadoAtual
//     }
// }

// return {
//     ...estadoAtual,
//     ...acao.user
// }



