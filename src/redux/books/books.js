const ADD_BOOK = 'bookstore/bookS/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/bookS/REMOVE_BOOK';
const BookArr = [
  {
    id: 1,
    title: 'Merchant of Vernice',
    author: 'William Shakespear',
  },
  {
    id: 2,
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
  },
  {
    id: 3,
    title: 'Mutanda Oyom Namondo',
    author: 'Nsentip Nsentip',
  },
  {
    id: 4,
    title: 'Finding Solace',
    author: 'Tobi Loba',
  },
  {
    id: 5,
    title: 'Beyond Captivating',
    author: 'OP. Amina',
  },
];
const bookReducer = (state = BookArr, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addedbooks = (book) => ({

  type: ADD_BOOK,
  book,

});

export const deletedBooks = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
