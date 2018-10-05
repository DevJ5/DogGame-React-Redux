export const ADD_SHOWN_BREED = 'ADD_SHOWN_BREED';

export default (state = [], action ={}) => {
  switch (action.type) {

    case ADD_SHOWN_BREED:
      return state.includes(action.payload) ? state : [...state, action.payload];

    default:
      return state;
  }
}