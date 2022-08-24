// ACTION
const CHECK_STATUS = 'bookstore/catagories/CHECK_STATUS';

// ACTION CREATORS
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// REDUCER
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoryReducer;
