import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreedObj from './correctBreed';
import answers from './answers';
import score from './score/';
import currentStreak from './currentStreak';

export default combineReducers({
  allBreeds,
  correctBreedObj,
  answers,
  score,
  currentStreak
});
