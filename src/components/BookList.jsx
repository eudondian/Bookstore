import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBookFromApi } from '../redux/books/books';
import '../styles/index.css';

/* eslint-disable react/prop-types */
function BookList({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const progress = 54;
  const chapter = Math.floor(Math.random() * 10);

  const deleteBook = () => {
    dispatch(deleteBookFromApi(id));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="col1">
          <div className="col1-row1">
            <p className="category">{category}</p>
            <h3 className="title">{title}</h3>
            <p className="author">{author}</p>
          </div>
          <div className="col1-row2">
            <span>Comments</span>
            <div className="span-dash" />
            <div>
              <button type="button" onClick={deleteBook} className="remove-btn">
                Remove
              </button>
            </div>
            <div className="span-dash" />
            <div>Edit</div>
          </div>
        </div>
        <div className="progress">
          <CircularProgressbar
            className="circularprogressbar"
            value={progress}
          />
          <div className="progress2">
            <p>{`${progress}%`}</p>
            Completed
          </div>
        </div>
        <span className="span" />
        <div className="chapter">
          <h4>CURRENT CHAPTER</h4>
          <span>
            Chapter
            {chapter}
          </span>
          <button type="button" className="progress-btn">Update Progress</button>
        </div>
      </div>
    </div>
  );
}

export default BookList;
