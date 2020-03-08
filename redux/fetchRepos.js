import { FETCH_REPOS } from './types/types'

export const fetchRepos = (data) => {
    return { type: FETCH_REPOS , data: data }
  }

  