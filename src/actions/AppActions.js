import {SET_BREEDS} from "../reducers/allBreeds";
import {SET_CORRECT_BREED} from "../reducers/correctBreed";
import capitalize from "../helpers/capitalize";
import {GET_ANSWERS} from "../reducers/answers";

export const setBreeds = allBreeds => ({
  type: SET_BREEDS,
  payload: Object.keys(allBreeds)
});

export const setCorrectBreed = CorrectBreed => {

  const linkToName = link => {
    const name = link.split('/')[4];
    if (name.includes('-')) return capitalize(name.split('-')[0]);
    return capitalize(name);
  };

  return {
    type: SET_CORRECT_BREED,
    payload: {
      image: CorrectBreed,
      name: linkToName(CorrectBreed)
    }
  }

};

export const getAnswers = (correctBreed, allBreeds) => {

  const getRandomBreed = allBreeds => capitalize(allBreeds[Math.floor(Math.random() * allBreeds.length)]);

  const randomBreeds = allBreeds => {
    return [getRandomBreed(allBreeds), getRandomBreed(allBreeds), correctBreed]
  };

  return ({
    type: GET_ANSWERS,
    payload: randomBreeds(allBreeds)
  })
};

// export const clicks = buttonValue => ({
//   type:
// })