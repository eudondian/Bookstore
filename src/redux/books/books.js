import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set Action
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOK';

// Initialize an empty array for the books
const books = [];

export const addedBooks = createAsyncThunk(
  ADD_BOOK,
  async (item) => {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BZgwqZ2DNziuT17roN8k/books', {
      item_id: item.id,
      title: item.title,
      author: item.author,
      category: item.category,
    });
    return {
      book: [
        item.id,
        [{
          author: item.author,
          title: item.title,
          category: item.category,
        }],
      ],
    };
  },
);

// Delete API Books
export const deleteBookFromApi = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BZgwqZ2DNziuT17roN8k/books/${id}`);
  return { id };
});

// Create a Reducer
const bookReducer = (state = books, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return action.payload.books;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload.book];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((item) => item[0] !== action.payload.id);
    default:
      return state;
  }
};

// Fetch Books from API
export const fetchBooksFromApi = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const { data } = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BZgwqZ2DNziuT17roN8k/books');
    return { books: Object.entries(data) };
  },
);

export default bookReducer;
