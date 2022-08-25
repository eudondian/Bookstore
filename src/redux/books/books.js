const ADD_NEW_BOOK = 'bookstore/books/ADD_NEW_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const BookArr = [
  {
    id: 1,
    title: 'Merchant of Vernice',
    author: 'William Shakespear',
    progress: 14,
    chapter: 2,
    genre: 'Shakespearean comedy',
  },
  {
    id: 2,
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
    progress: 45,
    chapter: 12,
    genre: 'Adventure Fiction',
  },
  {
    id: 3,
    title: 'Mutanda Oyom Namondo',
    author: 'Nsentip Nsentip',
    progress: 53,
    chaper: 8,
    genre: 'novel',
  },
  {
    id: 4,
    title: 'Finding Solace',
    author: 'Tobi Loba',
    progress: 35,
    chapter: 12,
    genre: 'romance',
  },
  {
    id: 5,
    title: 'Beyond Captivating',
    author: 'OP. Amina',
    progress: 25,
    chapter: 13,
    genre: 'fiction',
  },
];
const bookReducer = (state = BookArr, action) => {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [
        ...state, action.book,
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addedbooks = (book) => ({

  type: ADD_NEW_BOOK,
  book,

});

export const deletedBooks = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default bookReducer;
