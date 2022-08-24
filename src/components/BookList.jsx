import React from 'react';
import { PropTypes } from 'prop-types';

const BookList = ({ title, author }) => (
  <ul>
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button">Remove books</button>
  </ul>
);

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookList;
