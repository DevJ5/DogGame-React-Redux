import {combineReducers} from 'redux';

import allBreeds from "./allBreeds";
import correctBreed from "./correctBreed";
import answers from "./answers";

export default combineReducers({
  allBreeds,
  correctBreed,
  answers
})