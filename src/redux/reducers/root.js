import { combineReducers } from "@reduxjs/toolkit";
import { books } from "./getBooksReducer";
import { loader } from "./loaderReducer";
import { selectedBook } from "./selectBookReducer";
import { charactersList } from "./getCharactersReducer";

export const rootReducer = combineReducers({
  books,
  loader,
  selectedBook,
  charactersList,
});
