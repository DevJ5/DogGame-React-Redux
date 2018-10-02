import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreed from './correctBreed';
import answers from './answers';
import scoreChecker from './scoreChecker';

export default combineReducers({
  allBreeds,
  correctBreed,
  answers,
  scoreChecker
});
