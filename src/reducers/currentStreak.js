export const ADD_TO_STREAK = 'ADD_TO_STREAKE';
export const RESET_STREAK = 'RESET_STREAK'

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_TO_STREAK:
      return state + 1;
    case RESET_STREAK:
        return state = 0;
    default:
      return state;
  }
};
