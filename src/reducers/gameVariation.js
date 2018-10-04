export const SET_GAME_VARIATION = 'SET_GAME_VARIATION';

export default (state = 0, action) => {
  switch (action.type) {
    case SET_GAME_VARIATION:
      return action.payload;
    default:
      return state;
  }
};
