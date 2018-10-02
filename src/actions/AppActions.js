import { SET_BREEDS } from '../reducers/allBreeds';
import { SET_CORRECT_BREED } from '../reducers/correctBreed';
import { GET_ANSWERS } from '../reducers/answers';
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
  const getRandomBreed = () =>
    allBreeds[Math.floor(Math.random() * allBreeds.length)];

  return {
    type: GET_ANSWERS,
    payload: shuffleArray([
      getRandomBreed(),
      getRandomBreed(),
      correctBreed
    ]).map(breed => capitalize(breed))
  };
};

// export const checkIfCorrectAnswer = (clickedValue, correctBreed) => {
//   if (clickedValue === correctBreed) {
//     console.log('right');
//     return {
//       type:
//     }
//   } else {
//     console.log('wrong');
//   }

//   return {
//     type:
//   }
// };
