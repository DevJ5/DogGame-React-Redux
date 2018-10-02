import {SET_BREEDS} from "../reducers/allBreeds";
import {SET_CORRECT_BREED} from "../reducers/correctBreed";
import {GET_ANSWERS} from "../reducers/answers";

import capitalize from "../helpers/capitalize";

export const setBreeds = allBreeds => ({
  type: SET_BREEDS,
  payload: Object.keys(allBreeds)
});

export const setCorrectBreed = CorrectBreed => ({
  type: SET_CORRECT_BREED,
  payload: {
    image: CorrectBreed,
    name: CorrectBreed.split('/')[4].split('-')[0]
  }
});

export const getAnswers = (correctBreed, allBreeds) => {

  const getRandomBreed = () => allBreeds[Math.floor(Math.random() * allBreeds.length)];

  return ({
    type: GET_ANSWERS,
    payload: [getRandomBreed(), getRandomBreed(), correctBreed].map(breed => capitalize(breed))
  })
};

// export const clicks = buttonValue => ({
//   type:
// })