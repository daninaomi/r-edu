import { postLogin, postNewUser } from '../api'

export const LOGA_USER = 'LOGA_USER'
export const DESLOGA_USER = 'DESLOGA_USER'
export const SELECIONA_USERTYPE = 'SELECIONA_USERTYPE'
export const CADASTRA_USER_SUCCESS = 'CADASTRA_USER_SUCCESS'


export function logaUser(user) {
    return dispatch => {
        postLogin(user)
            .then(response => dispatch({
                
                type: LOGA_USER
                
            }))
            .catch((response, error) => {
                if (error.response.code === 400) {
                    error: error.response.mensagem
                } else if (error.response.code === 500) {
                    error: "Ocorreu um erro inesperado"
                }
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
                type: CADASTRA_USER_SUCCESS,
                user: response.data
            }))
            .catch((response, error) => {
                if (error.response.code === 400) {
                    error: error.response.mensagem
                } else if (error.response.code === 500) {
                    error: "Ocorreu um erro inesperado"
                }
            })
    }
}