import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreedObj from './correctBreed';
import answers from './answers';
import score from './score/';
import currentStreak from './currentStreak';
import shownBreeds from './shownBreeds';
import balance from './balance';
import threeImages from './threeImages';
import gameVariation from './gameVariation';
import keyHandling from './keyHandeling';
import tempSelectedBreeds from './tempSelectedBreeds';
import selectedBreeds from './selectedBreeds';
export default combineReducers({
  allBreeds,
  correctBreedObj,
  answers,
  score,
  currentStreak,
  shownBreeds,
  balance,
  threeImages,
  gameVariation,
  keyHandling,
  tempSelectedBreeds,
  selectedBreeds
});
