import axios from 'axios'

const config = {
    baseURL: 'http://backredu-001-site1.btempurl.com/api/'
}

const usuario = JSON.parse(localStorage.getItem('usuario')) || {}

if (usuario.accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${usuario.accessToken}`
}

const instance = axios.create(config)

export function postLogin(user) {
    return instance.post('/usuario/login', { ...user })
}

export function getLogin(user) {
    return instance.get(`/usuario/buscarporid/${user.id}`)
}

export function getUsers() {
    return instance.get(`/usuario/listar`)
}

export function postNewUser(user) {
    const url = user.usuario.tipoUsuario === 1 ? '/professor/cadastrar' : '/aluno/cadastrar'

    return instance.post(url, { ...user })
}

export function editUser(user) {
    const url = user.type === 'professor' ? `/professor/atualizar/${user.id}` : `/aluno/atualizar/${user.id}`
    return instance.put(url, { ...user })
}

export function getEscolas() {
    return instance.get('/escola/listar')
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
    return instance.get('/desafio/cadastrar', { ...desafio })
}

export function getDisciplina() {
    return instance.get('/disciplina/listar')
}

export function getAulas() {
    return instance.get('/aula/listar')
}

export function postAula(aula) {
    return instance.post('/aula/cadastrar', {...aula} )
}

// export function getTurmasDesafios(turma) {
//     return instance.get(`/turma/buscarporid/${turma.id}/desafios`)
// }

export function getTurmasAlunos(turma) {
    return instance.get(`/turma/buscarporid/${turma.id}/alunos`)
}

export function getPerguntas() {
    return instance.get('/pergunta/listar')
}

export function postRespostas(respostas) {

    const respostaAluno = {}

    return axios.all(respostas.map(r => (
        instance.post('/resposta/cadastrar', { opcao: r.opcao, idpergunta: r.idpergunta, idaluno: r.idaluno })
    )))
        .then(axios.spread((...responses) => (
            responses.map(response => (
                respostaAluno[response.data.id] = response.data
            ))
        )))
}

export function getPontuacao(aluno) {   
    return instance.get(`/aluno/buscarporid/${aluno.idaluno}/pontuacao`)
}

export function getProfessor(professor){
    return instance.get(`/professor/buscarporid/${professor.idprofessor}`)
}