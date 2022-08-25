// import React from 'react';
// import { useDispatch } from 'react-redux';
// import bookStatus from '../redux/categories/categories';

// const Categories = () => {
//   const dispatch = useDispatch();
//   const handlecheckStatus = () => {
//     dispatch(bookStatus);
//   };
//   return (
//     <div>
//       <button type="button" onClick={handlecheckStatus}>
//         Check staus
//       </button>
//     </div>
//   );
// };

// export default Categories;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { bookStatus } from '../redux/categories/categories';

const Categories = () => {
  const bookCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="submit" onClick={() => dispatch(bookStatus())}>Check Status</button>
      <div>{bookCategories}</div>
    </div>
  );
};

export default Categories;
