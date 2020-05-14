import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import promise from 'redux-promise';

export default configureStore({
  reducer : {},
  middleware: [...getDefaultMiddleware(), promise]
});
