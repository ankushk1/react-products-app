import {createStore, combineReducers, applyMiddleware} from 'redux'
import { todoReducer } from './reducers/todoReducer'
import thunk from 'redux-thunk'
import { productReducer } from './reducers/productReducer'
const reducers = combineReducers({
  todos : todoReducer,
  productsData: productReducer
})


const store = createStore(reducers, applyMiddleware(thunk))
export default store