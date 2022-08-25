// Categories Action and Reducer
const CHECK_STATUS = 'booklist/catagories/CHECK_STATUS';
const catagories = 'Under Construction';

// Categories Action
export const bookStatus = () => ({
  type: CHECK_STATUS,
});

// Categories Reducer
const cateReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return catagories;
    default:
      return state;
  }
};

export default cateReducer;
