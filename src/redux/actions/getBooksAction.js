import { createAction } from "@reduxjs/toolkit";
import {GET_BOOKS} from "../constants/getBooksConstant";

export const getBooks = createAction(GET_BOOKS);