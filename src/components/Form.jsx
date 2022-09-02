import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addedBooks } from '../redux/books/books';

const Categories = ['Thriller', 'Fiction', 'Economy', 'Comedy'];
const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const addedBook = (event) => {
    event.preventDefault();
    const book = {
      id: uuid(),
      title,
      author,
      category,
    };
    if (title.length && author.length && category.length) {
      dispatch(addedBooks(book));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  const newlyAddedTitle = (event) => {
    setTitle(event.target.value);
  };
  const newlyAddedAuthor = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="add-book">
        <h3>Add New Book</h3>
        {/* <hr /> */}
        <form onSubmit={addedBook} className="form">
          <input placeholder="Book Title" value={title} onChange={newlyAddedTitle} required />
          <input placeholder="Author" value={author} onChange={newlyAddedAuthor} required />

          <div className="select">
            <select
              required
              className="select-options"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {Categories.map((category) => (
                <option value={category} key={category} className="option">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="addBook">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
