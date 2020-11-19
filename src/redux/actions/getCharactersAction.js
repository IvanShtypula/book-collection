import { createAction } from "@reduxjs/toolkit";
import {GET_CHARACTERS} from "../constants/getCharactersConstant";

export const getCharacters = createAction(GET_CHARACTERS);