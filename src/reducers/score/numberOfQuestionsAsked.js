export const ADD_TO_QUESTIONS_ASKED = 'ADD_TO_QUESTIONS_ASKED';

export default (state = 0, action) => {
  switch (action.type) {

    case ADD_TO_QUESTIONS_ASKED:
      return state + 1;

    default:
      return state;
  }
};
