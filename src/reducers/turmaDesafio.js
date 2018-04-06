// import { LISTA_TURMAS_DESAFIOS } from "../actions";


// export function turmasDesafios(estadoAtual = {}, acao) {

//     switch (acao.type) {

//         case LISTA_TURMAS_DESAFIOS:
//             let novoEstado = {};

//             // acao.turmas.forEach(turma => (
//             //     novoEstado[turma.id] = turma
//             // ))
//             // acao.desafios.forEach(desafio => (
//             //     novoEstado[desafio.id] = desafio
//             // ))
//             acao.turmasDesafios.forEach((turmas, desafios) => (
//                 novoEstado= {
//                     [turmas.id]: turmas,
//                     [desafios.id]: desafios
//                 }
//             ))

//             return novoEstado

//         default:
//             return estadoAtual
//     }
// }