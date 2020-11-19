import axios from "axios";
import { getBooks } from "../actions/getBooksAction";
import { loaderOn, loaderOff } from "../actions/loaderAction";

export const getBooksOperation = () => async (dispatch) => {
  try {   
    dispatch(loaderOn());    
    const {data}  = await axios({
      method: "get",
      url: `https://www.anapioficeandfire.com/api/books`,
    });
    dispatch(getBooks(data));   
  } catch (error) {
    console.log(error);
  } finally {    
    dispatch(loaderOff());
  }
};