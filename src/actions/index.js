import { postLogin, postNewUser } from '../api'

export const LOGA_USER = 'LOGA_USER'
export const DESLOGA_USER = 'DESLOGA_USER'
export const SELECIONA_USERTYPE = 'SELECIONA_USERTYPE'
export const CADASTRA_USER = 'CADASTRA_USER'


export function logaUser(user) {
    return dispatch => {
        postLogin(user)
            .then(response => dispatch({
                
                type: LOGA_USER
                
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function deslogaUser() {
    return {
        type: DESLOGA_USER,
    }
}

export function selecionarUserType(userType) {
    return {
        type: SELECIONA_USERTYPE,
        userType
    }
}

export function cadastraUser(user) {
    return dispatch => {
        postNewUser(user)
            .then(response => dispatch({
                
                type: CADASTRA_USER,
                user
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}