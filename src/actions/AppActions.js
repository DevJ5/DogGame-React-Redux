import { SET_BREEDS } from '../reducers/allBreeds';
import { SET_CORRECT_BREED } from '../reducers/correctBreed';
import { GET_ANSWERS } from '../reducers/answers';
import { ADD_TO_SCORE } from '../reducers/currentScore';
import { ADD_TO_QUESTIONS_ASKED } from '../reducers/numberOfQuestionsAsked';
import capitalize from '../helpers/capitalize';
import shuffleArray from '../helpers/shuffleArray';

export const setAllBreeds = breeds => ({
  type: SET_BREEDS,
  payload: Object.keys(breeds)
});

export const setCorrectBreed = breedUrl => ({
  type: SET_CORRECT_BREED,
  payload: {
    image: breedUrl,
    name: breedUrl.split('/')[4].split('-')[0]
  }
});

export const getAnswers = (correctBreed, allBreeds) => {
  const breedsInArray = [correctBreed];
  const getRandomBreed = () =>
    allBreeds[Math.floor(Math.random() * allBreeds.length)];
  // Create uniques
  const pushUniqueBreed = () => {
    const randomBreed = getRandomBreed();
    if (!breedsInArray.includes(randomBreed)) {
      return randomBreed;
    }
    return pushUniqueBreed();
  };
  breedsInArray.push(pushUniqueBreed());
  breedsInArray.push(pushUniqueBreed());

  return {
    type: GET_ANSWERS,
    payload: shuffleArray(breedsInArray).map(breed => capitalize(breed))
  };
};

export const addToScore = () => {
  return {
    type: ADD_TO_SCORE
  };
};

export const addToNumberOfQuestionsAsked = () => {
  return {
    type: ADD_TO_QUESTIONS_ASKED
  };
};
