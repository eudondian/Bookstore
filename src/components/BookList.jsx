import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/books';

/* eslint-disable react/prop-types */
function BookList({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const chapter = Math.floor(Math.random() * 10);

  const deleteBook = () => {
    dispatch(deleteBookFromApi(id));
  };

  return (
    <div>
      <h4>{title}</h4>
      <p>{author}</p>
      <p>{category}</p>

      <p>
        <span>Chapter </span>
        {chapter}
      </p>
      <button type="button" onClick={deleteBook}>Remove</button>
    </div>
  );
}

export default BookList;
