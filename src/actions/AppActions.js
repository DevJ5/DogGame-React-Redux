import { SET_BREEDS } from '../reducers/allBreeds';
import { SET_CORRECT_BREED } from '../reducers/correctBreed';
import { GET_ANSWERS } from '../reducers/answers';
import capitalize from '../helpers/capitalize';

export const setAllBreeds = breeds => ({
  type: SET_BREEDS,
  payload: Object.keys(breeds)
});

export const setCorrectBreed = breedUrl => {
  const convertUrlToBreed = url => {
    const breed = url.split('/')[4];
    if (breed.includes('-')) return capitalize(breed.split('-')[0]);
    return capitalize(breed);
  };

  return {
    type: SET_CORRECT_BREED,
    payload: {
      image: breedUrl,
      name: convertUrlToBreed(breedUrl)
    }
  };
};

export const getAnswers = (correctBreed, allBreeds) => {
  const getRandomBreed = allBreeds =>
    capitalize(allBreeds[Math.floor(Math.random() * allBreeds.length)]);

  const generateThreeBreeds = allBreeds => {
    return [getRandomBreed(allBreeds), getRandomBreed(allBreeds), correctBreed];
  };

  return {
    type: GET_ANSWERS,
    payload: generateThreeBreeds(allBreeds)
  };
};
