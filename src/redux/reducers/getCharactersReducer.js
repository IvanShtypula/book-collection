import { createReducer } from "@reduxjs/toolkit";
import { getCharacters } from "../actions/getCharactersAction";

const initialState = [];
export const charactersList = createReducer(initialState, {
  [getCharacters]: (_, { payload }) => payload,
});
