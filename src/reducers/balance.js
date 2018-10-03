export const ADD_TEN_COINS = 'ADD_TEN_COINS';

export default (state = 0, action = {}) => {
  switch(action.type) {

    case ADD_TEN_COINS:
      return state + 10;

    default:
      return state
  }
}