// import ACTION_TYPES from './actions'

const defaultState = {
  data: [],
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_SUBMITTED':
            return {
              ...state,
              data: [ ...state.data, {
                ...action.payload,
              }]
            }
    default:
      return state
  }
}

export default usersReducer