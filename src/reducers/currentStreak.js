export const ADD_TO_STREAK = 'ADD_TO_STREAK';
export const RESET_STREAK = 'RESET_STREAK'

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_TO_STREAK:
      return state + 1;
    case RESET_STREAK:
        return 0;
    default:
      return state;
  }
};
