import { SET_BREEDS } from '../reducers/allBreeds';
import { SET_CORRECT_BREED } from '../reducers/correctBreed';
import { GET_ANSWERS } from '../reducers/answers';
import { ADD_TO_SCORE } from '../reducers/scoreChecker';
import capitalize from '../helpers/capitalize';
import shuffleArray from '../helpers/shuffleArray';
import { ADD_TO_STREAK, CLEAN_STREAK } from '../reducers/currentStreak'


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

export const scoreChecker = () => {
  return {
    type: ADD_TO_SCORE
  };
};

export const incrementWinStreak = () => {
  return{
    type: ADD_TO_STREAK
  }
}

export const cleanWinStreak = () => {
  return{
    type: CLEAN_STREAK
  }
}

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
