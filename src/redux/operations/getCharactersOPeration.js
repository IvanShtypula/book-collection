import axios from "axios";
import { getCharacters } from "../actions/getCharactersAction";
import { loaderOn, loaderOff } from "../actions/loaderAction";

export const getCharactersOperation = (urlsArr) => async (dispatch) => {
  try {   
    dispatch(loaderOn());
    let promiseArray = urlsArr.map((url) => {
      return axios.get(url);
    });  
    axios.all(promiseArray).then((results) => {
     return results.map((item) => item.data)     
    })
    .then((data) => dispatch(getCharacters(data)));
  } catch (error) {
    console.log(error);
  } finally {    
    dispatch(loaderOff());
  }
};
