export const LOGA_USER = 'LOGA_USER'
export const DESLOGA_USER = 'DESLOGA_USER'


export function logaUser(user) {
    return dispatch => {
        postLogin(user)
            .then(response => dispatch({
                {
                    type: LOGA_USER
                }
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