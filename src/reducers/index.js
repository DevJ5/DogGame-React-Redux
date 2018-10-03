import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreed from './correctBreed';
import answers from './answers';
// import currentScore from './score/currentScore';
// import numberOfQuestionsAsked from './score/numberOfQuestionsAsked';
import currentStreak from './currentStreak'
import score from './score/index.js'

export default combineReducers({
  allBreeds,
  correctBreed,
  answers,
  score,
  currentStreak
});
