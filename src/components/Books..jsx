/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchBooksFromApi } from '../redux/books/books';
import BookList from './BookList';
import Form from './Form';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksFromApi());
  }, []);
  return (
    <div>
      <div>
        {books.map((book) => (
          <BookList
            key={book[0]}
            id={book[0]}
            title={book[1][0].title}
            author={book[1][0].author}
            chapter={book[1][0].chapter}
            category={book[1][0].category}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default Books;
