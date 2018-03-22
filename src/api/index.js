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

    console.log('api user', user)

    return instance.post(url, { ...user })
}

export function editUser(user) {
    const url = user.type === 'professor' ? '/professor' : '/aluno'
    return instance.put(url, { ...user })
}

export function postSala(sala) {
    return instance.post('/', { sala })
}

export function getDesafio(desafio) {
    return instance.get('/', { desafio })
}