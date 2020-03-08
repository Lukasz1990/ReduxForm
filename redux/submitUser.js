import { USER_SUBMITTED } from './types/types'


export const submitUser = (payload) => {
    return { type: USER_SUBMITTED ,payload}
}