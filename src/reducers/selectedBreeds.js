export const ADD_TO_SELECTED_BREEDS = 'ADD_TO_SELECTED_BREEDS';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_SELECTED_BREEDS:
      return action.payload;
    default:
      return state;
  }
};
