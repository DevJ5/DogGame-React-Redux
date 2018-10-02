import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreed from './correctBreed';
import answers from './answers';
import scoreChecker from './scoreChecker';
import currentStreak from './currentStreak'
import currentScore from './currentScore';
import numberOfQuestionsAsked from './numberOfQuestionsAsked';

export default combineReducers({
  allBreeds,
  correctBreed,
  answers,
  scoreChecker,
  currentStreak,
  currentScore,
  numberOfQuestionsAsked
});
