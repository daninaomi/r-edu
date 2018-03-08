import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://'
})

export function postLogin(user) {
    return instance.post('/', { user })
}

export function getLogin(user) {
    return instance.get('/', { user })
}