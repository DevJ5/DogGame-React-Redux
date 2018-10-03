export const SET_BREEDS = 'SET_BREEDS';

export default (state = [], action = {}) => {
  switch(action.type) {

    case SET_BREEDS:
      return Object.keys(action.payload);

    default:
      return state;
  }
}