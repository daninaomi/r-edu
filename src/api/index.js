import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://backredu-001-site1.btempurl.com/api/'
})

export function postLogin(user) {
    return instance.post('/usuario/cadastrar', { ...user })
}

export function getLogin(user) {
    return instance.get('/usuario/buscarporid/{id}', { ...user })
}

// export function getLogin(user) {
//     return instance.get('/usuario/login', { ...user })
// }

export function postNewUser(user) {
    const url = user.usuario.tipoUsuario === 1 ? '/professor' : '/aluno'

    return instance.post(url, { ...user })
}

export function editUser(user) {
    const url = user.type === 'professor' ? '/professor' : '/aluno'
    return instance.put(url, { ...user })
}

export function getTurmas() {
    return instance.get('/turma/listar')
}

export function postTurma(turma) {
    return instance.post('/turma/cadastrar', { ...turma })
}

export function getAlunos() {
    return instance.get('/aluno/listar')
}

export function postTurmaAluno(alunos, turma) {
    const turmaAluno = {}

    return axios.all(alunos.map(aluno => (
        instance.post('/turmaaluno/cadastrar', { idTurma: turma.id, idAluno: aluno.id })
    )))
        .then(axios.spread((...responses) => (
            responses.map(response => (
                turmaAluno[response.data.id] = response.data
            ))
        )))
}

export function getDesafio() {
    return instance.get('/desafio/listar')
}

export function postDesafio(desafio) {
    return instance.get('/desafio/cadastrar', { desafio })
}

export function getDisciplina() {
    return instance.get('/disciplina/listar')
}

export function getAulas() {
    return instance.get('/aula/listar')
}

export function postAula(aula) {
    return instance.post('/aula/cadastrar', { aula })
}
