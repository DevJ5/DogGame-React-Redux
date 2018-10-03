import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreed from './correctBreed';
import answers from './answers';
import score from './score/'
import currentStreak from './currentStreak'

export default combineReducers({
  allBreeds,
  correctBreed,
  answers,
  score,
  currentStreak
});
