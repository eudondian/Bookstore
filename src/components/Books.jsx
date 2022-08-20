import React, { useState } from 'react';
import BookList from './BookList';
import Form from './Form';

const Books = () => {
  const [books, setBooks] = useState([]);

  const addBooks = () => setBooks();

  return (
    <div>
      {books.map((books) => (
        <BookList
          key={books.id}
          title={books.title}
          author={books.author}
        />
      ))}
      <Form addBooks={addBooks} />
    </div>
  );
};

export default Books;
