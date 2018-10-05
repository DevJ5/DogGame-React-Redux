import shuffleArray from "../helpers/shuffleArray";
import extractBreedName from "../helpers/extractBreedName";

export const SET_CORRECT_BREED = 'SET_CORRECT_BREED';
export const SET_CORRECT_BREED_FROM_IMAGES = 'SET_CORRECT_BREED_FROM_IMAGES';

const init = {
  image: '',
  name: ''
};

export default (state = init, action = {}) => {
  switch(action.type) {

    case SET_CORRECT_BREED:
      return {
        image: action.payload,
        name: extractBreedName(action.payload)
      };

    case SET_CORRECT_BREED_FROM_IMAGES:

      const threeImagesUrls = [...action.payload];

      const correctBreed = shuffleArray(threeImagesUrls)[0];

      return {
        image: correctBreed,
        name: extractBreedName(correctBreed)
      };

    default:
      return state;

  }
}