import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './ducks/budgetReducer';

let rootReducer = combineReducers({budget: budgetReducer})

export default createStore(rootReducer,applyMiddleware(promiseMiddleware));