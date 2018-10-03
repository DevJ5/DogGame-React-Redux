export const ADD_TEN_COINS = 'ADD_TEN_COINS';
export const PAY_FIFTY_COINS = 'PAY_FIFTY_COINS';

export default (state = 0, action = {}) => {
  switch(action.type) {

    case ADD_TEN_COINS:
      return state + 10;

    case PAY_FIFTY_COINS:
      return state - 50;

    default:
      return state
  }
}