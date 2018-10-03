import { combineReducers } from 'redux';


import allBreeds from './allBreeds';
import correctBreedObj from './correctBreed';
import answers from './answers';
import score from './score/';
import currentStreak from './currentStreak';
import shownBreeds from './shownBreeds'

export default combineReducers({
  allBreeds,
  correctBreedObj,
  answers,
  score,
  currentStreak,
  shownBreeds
});
