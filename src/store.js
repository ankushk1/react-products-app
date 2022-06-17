import {createStore, combineReducers, applyMiddleware} from 'redux'
import { todoReducer } from './reducers/todoReducer'
const reducers = combineReducers({
  todos : todoReducer
})


const store = createStore(reducers)

export default store