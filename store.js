import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './redux/reducer'


export const initializeStore = () =>
  createStore(
    combineReducers({
      usersReducer
    }),
    composeWithDevTools(applyMiddleware())
  )


// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'


