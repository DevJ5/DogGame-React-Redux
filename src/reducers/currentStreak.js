export const ADD_TO_STREAK = 'ADD_TO_STREAK';
export const CLEAN_STREAK = 'CLEAN_STREAK'

export default (state = 0, action) => {
    switch (action.type) {
      case ADD_TO_STREAK:
        return state + 1;
      case CLEAN_STREAK:
        return state = 0 ;
      default:
        return state;
    }
  };
  