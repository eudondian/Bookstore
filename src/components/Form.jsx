import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addedBooks } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addedBook = (event) => {
    event.preventDefault();
    const book = {
      id: uuid(),
      title,
      author,
      category: `${['Thriller', 'Fiction', 'Economy', 'Comedy'][Math.floor(Math.random() * ['Thriller', 'Fiction', 'Economy', 'Comedy'].length)]}`,
    };
    if (title.length && author.length) {
      dispatch(addedBooks(book));
      setTitle('');
      setAuthor('');
    }
  };

  const newlyAddedTitle = (event) => {
    setTitle(event.target.value);
  };
  const newlyAddedAuthor = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <div className="form-container">
      <h3>Add New Book</h3>
      <form onSubmit={addedBook}>
        <input placeholder="Book Title" value={title} onChange={newlyAddedTitle} required />
        <input placeholder="Author" value={author} onChange={newlyAddedAuthor} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
