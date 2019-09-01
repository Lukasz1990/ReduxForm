const ACTION_TYPES = {
  USER_SUBMITTED: 'USER_SUBMITED',
}

export const userSubmitted = payload => {
  return { type: ACTION_TYPES.USER_SUBMITTED, payload }
}

export default ACTION_TYPES