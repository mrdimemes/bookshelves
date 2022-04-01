import { configureStore } from '@reduxjs/toolkit';
import bookcaseReducer from './reducers/bookcase';


const store = configureStore({
  reducer: {
    bookcase: bookcaseReducer
  }
})

export default store;