// Book Reducer and Store;
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cateReducer from './categories/categories';
import BookReducer from './books/books';

const rootReducer = combineReducers({
  books: BookReducer,
  categories: cateReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
