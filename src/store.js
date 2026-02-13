import {createStore,combineReducers} from 'redux';
import todoReducer from './reducers/todoReducer';
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';

const reduxDevToolEnhacer= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store=createStore(combineReducers({todos:todoReducer}),{},reduxDevToolEnhacer);
const store=configureStore({
    reducer:{
        todos:todoSlice.reducer
    },
    devTools:true
})

export default store;