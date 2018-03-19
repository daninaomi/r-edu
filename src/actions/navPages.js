// import { getCards } from '../api'

export const PUSH_PAGE = 'PUSH_PAGE'


export function pushPage(page) {
    return {
        type: PUSH_PAGE,
        page
    }
}