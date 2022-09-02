// Book Reducer and Store;
import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cateReducer from './categories/categories';
import BookReducer from './books/books';

const rootReducer = combineReducers({
  books: BookReducer,
  categories: cateReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
