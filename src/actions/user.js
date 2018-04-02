import { postLogin, postNewUser, editUser, getUsers, getLogin } from '../api'

export const LOGA_USER = 'LOGA_USER'
export const DESLOGA_USER = 'DESLOGA_USER'
export const SELECIONA_USERTYPE = 'SELECIONA_USERTYPE'
export const CADASTRA_USER_SUCCESS = 'CADASTRA_USER_SUCCESS'
export const ALTERA_USER = 'ALTERA_USER'
export const LISTA_USERS = 'LISTA_USERS'

export function logaUser(user) {
    return dispatch => {
      getLogin()
        .then(response => dispatch ({
          postLogin(user)
              .then(response => dispatch({
                  type: LOGA_USER
              }))
              .catch(error => {
                  console.log('Ocorreu um erro', error)
              })
            }))
        .catch(error => {
          console.log('User não encontrado', error)
      })
    }
}

export function deslogaUser() {
    return {
        type: DESLOGA_USER,
    }
}

export function selecionaUserType(user) {
    return {
        type: SELECIONA_USERTYPE,
        user
    }
}

export function cadastraUser(user) {
    return dispatch => {
        postNewUser(user)
            .then(response => dispatch({
                type: CADASTRA_USER_SUCCESS,
                user: {
                  ...user,
                  id: response.data.id
                }
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function alteraUser(user) {
    return dispatch => {
        editUser(user)
            .then(response => dispatch({
                type: ALTERA_USER,
                user: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function listaUsers() {
    return dispatch => {
        getUsers()
            .then(response => dispatch({
                type: LISTA_USERS,
                users: response.data
            }))
        .catch(error => {
            console.log('Ocorreu um erro', error)
        })
    }
}

// .catch((error) => {
//     if (error.response.code === 400) {
//         error: error.response.mensagem
//     } else if (error.response.code === 500) {
//         error: "Ocorreu um erro inesperado"
//     }
// })
