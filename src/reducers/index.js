import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreed from './correctBreed';
import answers from './answers';
import displayedBreeds from './displayedBreeds';

export default combineReducers({
  allBreeds,
  correctBreed,
  answers
  // displayedBreeds
});
