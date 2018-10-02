export const WRONG_ANSWER = 'WRONG_ANSWER';
export const RIGHT_ANSWER = 'RIGHT_ANSWER';

export default (state = [], action = {}) => {
  switch (action.type) {
    // case WRONG_ANSWER:
    //   return [
    //     ...state,
    //     {
    //       displayed:
    //     }
    //   ]

    // case RIGHT_ANSWER:
    //   return

    default:
      return state;
  }
};
