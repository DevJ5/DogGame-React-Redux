import { SET_BREEDS } from '../reducers/allBreeds';
import { GET_THREE_IMAGES } from '../reducers/threeImages';
import {
  SET_CORRECT_BREED,
  SET_CORRECT_BREED_FROM_IMAGES
} from '../reducers/correctBreed';
import { GET_ANSWERS, GET_ANSWERS_FROM_IMAGES } from '../reducers/answers';
import { SET_GAME_VARIATION } from '../reducers/gameVariation';
import { ADD_TO_SCORE } from '../reducers/score/currentScore';
import { ADD_TO_QUESTIONS_ASKED } from '../reducers/score/numberOfQuestionsAsked';
import { ADD_TO_STREAK, RESET_STREAK } from '../reducers/currentStreak';
import { ADD_SHOWN_BREED } from '../reducers/shownBreeds';
import { ADD_TEN_COINS } from '../reducers/balance';
import { HANDLE_THE_KEY } from '../reducers/keyHandeling';
import { ADD_THREE_UNIQUES } from '../reducers/tempSelectedBreeds';
import selectedBreeds, {
  ADD_TO_SELECTED_BREEDS
} from '../reducers/selectedBreeds';

import request from 'superagent';

export const getAllBreeds = () => {
  return function(dispatch) {
    request.get('https://dog.ceo/api/breeds/list/all').then(res => {
      dispatch(setAllBreeds(res.body.message));
    });
  };
};

export const setAllBreeds = breeds => ({
  type: SET_BREEDS,
  payload: breeds
});

export const setCorrectBreedGameUno = breedUrl => ({
  type: SET_CORRECT_BREED,
  payload: breedUrl
});

export const setCorrectBreedGameDos = breedImages => ({
  type: SET_CORRECT_BREED_FROM_IMAGES,
  payload: breedImages
});

export const getThreeRandomImages = threeImages => ({
  type: GET_THREE_IMAGES,
  payload: threeImages
});

export const getAnswers = (correctBreed, allBreeds) => ({
  type: GET_ANSWERS,
  payload: {
    correctBreed,
    allBreeds
  }
});

export const getAnswersFromImages = breedImages => ({
  type: GET_ANSWERS_FROM_IMAGES,
  payload: breedImages
});

export const setGameVariation = bool => ({
  type: SET_GAME_VARIATION,
  payload: bool
});

export const addToScore = () => ({
  type: ADD_TO_SCORE
});

export const addToNumberOfQuestionsAsked = () => ({
  type: ADD_TO_QUESTIONS_ASKED
});

export const addToWinStreak = () => ({
  type: ADD_TO_STREAK
});

export const resetWinStreak = () => ({
  type: RESET_STREAK
});

export const addShownBreeds = breed => ({
  type: ADD_SHOWN_BREED,
  payload: breed
});

export const addTenCoins = () => ({
  type: ADD_TEN_COINS
});

export const keyHandling = e => ({
  type: HANDLE_THE_KEY,
  payload: e
});

export const addThreeUniques = (allBreeds, selectedBreeds) => {
  return {
    type: ADD_THREE_UNIQUES,
    payload: {
      allBreeds,
      selectedBreeds
    }
  };
};

export const addToSelectedBreeds = (res0, res1, res2, tempSelectedBreeds) => ({
  type: ADD_TO_SELECTED_BREEDS,
  payload: [
    {
      name: tempSelectedBreeds[0],
      images: res0.body.message
    },
    {
      name: tempSelectedBreeds[1],
      images: res1.body.message
    },
    {
      name: tempSelectedBreeds[2],
      images: res2.body.message
    }
  ]
});

export const addImagesToTempSelectedBreeds = tempSelectedBreeds => {
  return function(dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${tempSelectedBreeds[0]}/images`)
      .then(res0 =>
        request
          .get(`https://dog.ceo/api/breed/${tempSelectedBreeds[1]}/images`)
          .then(res1 =>
            request
              .get(`https://dog.ceo/api/breed/${tempSelectedBreeds[2]}/images`)
              .then(res2 =>
                dispatch(
                  addToSelectedBreeds(res0, res1, res2, tempSelectedBreeds)
                )
              )
          )
      );
  };
};
// request.get('https://dog.ceo/api/breeds/list/all').then(res => {
//   dispatch(setAllBreeds(res.body.message));
// });

// type: ADD_IMAGES,
// payload: tempSelectedBreeds
