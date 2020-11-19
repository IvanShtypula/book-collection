import { createReducer } from "@reduxjs/toolkit";
import {selectBook} from "../actions/selectBookAction"


export const selectedBook = createReducer([], {
  [selectBook]: (_, { payload }) => payload,
});