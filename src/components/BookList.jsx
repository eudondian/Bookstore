import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deletedBooks } from '../redux/books/books';

const BookList = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletedBooks(Number(id)));
  };

  return (
    <ul>
      <div>{title}</div>
      <div>{author}</div>
      <button type="button" id={id} onClick={(e) => { handleDelete(e.target.id); }}>Remove books</button>
    </ul>
  );
};

BookList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookList;
