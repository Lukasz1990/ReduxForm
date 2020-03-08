import { USER_SUBMITTED, FETCH_REPOS } from './types/types'

const defaultState = {
  data: [],
  repos:[]
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SUBMITTED:
            return {
              ...state,
              data: [ ...state.data, {
                ...action.payload,
              }],
              
            }
    case FETCH_REPOS:
             return {
              ...state,
              repos: action.data
          };
    default:
      return state
  }
}

export default usersReducer