import shuffleArray from '../helpers/shuffleArray';

export const GET_THREE_IMAGES = 'GET_THREE_IMAGES';

export default (state = null, action) => {
  switch (action.type) {

    case GET_THREE_IMAGES:

      const threeImagesUrls = [...action.payload];

      const correctBreed = shuffleArray(threeImagesUrls)[0]
        .split('/')[4]
        .split('-')[0];

      return {
        correctBreed: correctBreed,
        images: action.payload
      };

    default:
      return state;
  }
};
