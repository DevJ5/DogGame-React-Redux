export const SET_BREEDS = 'SET_BREEDS';

export default (state = [], action = {}) => {
  switch(action.type) {

    case SET_BREEDS:
      console.log(action.payload, 'reducer');
      return action.payload;

    default:
      return state;

  }
}