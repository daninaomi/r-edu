
import { 
    CADASTRA_ALUNOS, 
    PEGA_LISTA,
    FILTRA_LISTA 
} from "../actions";


const estadoInicial = {
    0: {
        id: 0,
        nome: 'Danielle',
        sobrenome: 'Nakatsu',
        cpf: '38387676543'
 
    },
    1: {
        id: 1,
        nome: 'Camila',
        sobrenome: 'Belo',
        cpf: '21337676543'

    }

}

export function alunos(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {

        case PEGA_LISTA:
            return {
                ...estadoAtual,
                [acao.sala.alunos.id]: listaAlunos
            }
        
        case FILTRA_LISTA:
            const id = acao.props.match.params.id
            const sala = acao.sala[id]
            const listaAlunos = acao.sala.alunos

            return {
                ...estadoAtual,
                sala,
                listaAlunos: listaAlunos.map(aluno => {
                    return state.listaAlunos[aluno];
                })
            }

        case CADASTRA_ALUNOS:
            return {
                ...estadoAtual,
                [acao.aluno.id]: acao.aluno
            }
        default:
            return estadoAtual
    }
}

