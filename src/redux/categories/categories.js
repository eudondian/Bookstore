// Categories Reducer
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categories = [];
const cateReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

const bookStatus = () => ({
  type: CHECK_STATUS,

});

export default { cateReducer, bookStatus };
