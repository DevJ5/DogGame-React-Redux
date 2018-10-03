export const SET_CORRECT_BREED = 'SET_CORRECT_BREED';

export default (state = {}, action = {}) => {
  switch(action.type) {

    case SET_CORRECT_BREED:
      return {
        image: action.payload,
        name: action.payload.split('/')[4].split('-')[0]
      };

    default:
      return state;

  }
}