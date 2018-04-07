import { 
    CADASTRA_AULA, 
    LISTA_AULAS, 
    BUSCA_AULA 
} from "../actions";


export function aulas(estadoAtual = {}, acao) {
    console.log(`lista reducer`)
    switch (acao.type) {
        case LISTA_AULAS:
            let novoEstado = {};
            acao.aulas.forEach(aula => (
                novoEstado[aula.id] = aula
            ))
            return novoEstado

        case CADASTRA_AULA:
            return {
                ...estadoAtual,
                [acao.aula.id]: acao.aula
            }
        
        case BUSCA_AULA:
            let newState = {};

            newState[acao.aula.id] = acao.aula
            console.log('aula', acao)

            return newState

        default:
            return estadoAtual
    }
}
