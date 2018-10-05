import shuffleArray from '../helpers/shuffleArray';

export const GET_THREE_IMAGES = 'GET_THREE_IMAGES';

export default (state = null, action) => {
  switch (action.type) {

    case GET_THREE_IMAGES:

      return action.payload;

    default:
      return state;
  }
};
