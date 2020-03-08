import {fetchRepos} from './fetchRepos'

export const getRepos = () => dispatch => {
    fetch(`https://api.github.com/users/DevStockCom/repos`)
    .then(res => res.json())
    .then(data => dispatch(fetchRepos(data)))
  }
 
