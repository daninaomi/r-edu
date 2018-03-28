import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://backredu-001-site1.btempurl.com/api/'
})

export function postLogin(user) {
    return instance.post('/', { ...user })
}

export function getLogin(user) {
    return instance.get('/', { ...user })
}

export function postNewUser(user) {
    const url = user.usuario.tipoUsuario === 1 ? '/professor' : '/aluno'

    return instance.post(url, { ...user })
}

export function editUser(user) {
    const url = user.type === 'professor' ? '/professor' : '/aluno'
    return instance.put(url, { ...user })
}

export function getTurma(turma) {
    return instance.get('/turma', { ...turma })
}

export function postTurma(turma) {
    return instance.post('/turma/cadastrar', { ...turma })
}

export function getAlunos(alunos) {
    return instance.get('/aluno/listar', { ...alunos })
}

export function postTurmaAluno(alunos, turma) {
    return axios.all(alunos.map(aluno => {
        return instance.post('/turmaaluno/cadastrar', { idTurma: turma.id, idAluno: aluno.id })
    }))
}

export function getDesafio(desafio) {
    return instance.get('/desafio/listar', { desafio })
}

export function postDesafio(desafio) {
    return instance.get('/desafio/cadastrar', { desafio })
}

export function postAula(aula) {
    return instance.get('/aula/listar', { aula })
}