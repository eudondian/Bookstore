import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import Form from './Form';

const ShowBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <BookList
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
};

export default ShowBooks;
