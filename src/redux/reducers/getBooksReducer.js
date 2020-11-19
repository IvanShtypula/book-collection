import { createReducer } from "@reduxjs/toolkit";
import {getBooks} from "../actions/getBooksAction"

const initialState = [];
export const books = createReducer(initialState, {
  [getBooks]: (_, { payload }) => payload,
});
