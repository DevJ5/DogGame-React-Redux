export const SET_CORRECT_BREED = 'SET_CORRECT_BREED';

export default (state = {}, action = {}) => {
  switch(action.type) {

    case SET_CORRECT_BREED:
      return action.payload;

    default:
      return state;

  }
}