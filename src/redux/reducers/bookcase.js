import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  books: [],
  isBooksLoaded: false,
  activeBook: null,
  shelvesNumber: 3,
  minBooksOnShelve: 2,
  maxBooksOnShelve: 10,
};

const getBookIndex = (books, targetId) => {
  return books.findIndex((book) => {
    return (book.id === targetId) ? true : false;
  });
}

const bookcaseSlice = createSlice({
  name: 'bookcase',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },

    addBook(state, action) {
      const id = uuidv4();
      state.books.push({
        ...action.payload,
        id: id
      })
    },

    removeBook(state, action) {
      const bookIndex = getBookIndex(state.books, action.payload);
      if (bookIndex !== -1) {
        state.books.splice(bookIndex, 1);
      }
    },

    editBook(state, action) {
      const bookIndex = getBookIndex(state.books, action.payload.id);
      if (bookIndex !== -1) {
        state.books[bookIndex] = action.payload;
      }
    },

    booksLoaded(state) {
      state.isBooksLoaded = true;
    },

    setActiveBook(state, action) {
      state.activeBook = action.payload;
    },

    setShelvesNumber(state, action) {
      state.shelvesNumber = action.payload;
    },

    setMinBooksOnShelve(state, action) {
      state.minBooksOnShelve = action.payload;
    },

    setMaxBooksOnShelve(state, action) {
      state.maxBooksOnShelve = action.payload;
    },
  }
})

export const {
  setBooks,
  addBook,
  removeBook,
  editBook,
  booksLoaded,
  setActiveBook,
  setShelvesNumber,
  setMinBooksOnShelve
} = bookcaseSlice.actions;

export default bookcaseSlice.reducer;