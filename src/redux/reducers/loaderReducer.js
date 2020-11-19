import { createReducer } from "@reduxjs/toolkit";
import { loaderOn, loaderOff } from "../actions/loaderAction";

export const loader = createReducer(false, {
  [loaderOn]: () => true,
  [loaderOff]: () => false,
});
