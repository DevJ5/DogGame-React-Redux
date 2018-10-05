import shuffleArray from "../helpers/shuffleArray";

export const SET_CORRECT_BREED = 'SET_CORRECT_BREED';
export const SET_CORRECT_BREED_FROM_IMAGES = 'SET_CORRECT_BREED_FROM_IMAGES';

export default (state = {}, action = {}) => {
  switch(action.type) {

    case SET_CORRECT_BREED:
      return {
        image: action.payload,
        name: action.payload.split('/')[4].split('-')[0]
      };

    case SET_CORRECT_BREED_FROM_IMAGES:

      const threeImagesUrls = [...action.payload];

      const correctBreed = shuffleArray(threeImagesUrls)[0];

      return {
        image: correctBreed,
        name: correctBreed.split('/')[4].split('-')[0]
      };

    default:
      return state;

  }
}