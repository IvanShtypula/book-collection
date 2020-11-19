import { createAction } from "@reduxjs/toolkit";
import {SELECT_BOOK} from "../constants/selectBookConstant";

export const selectBook = createAction(SELECT_BOOK);