export const ADD_TO_SCORE = 'ADD_TO_SCORE';

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_TO_SCORE:
      return state + 1;
    default:
      return state;
  }
};
