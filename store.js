import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './redux/reducer'
import thunk from 'redux-thunk'

export const initializeStore = () =>
  createStore(
    combineReducers({
      usersReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  )


// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'


