export const GET_ANSWERS = "GET_ANSWERS"

export default (state = [], action = {}) => {
  switch(action.type) {

    case GET_ANSWERS:
      return action.payload;

    default:
      return state;

  }
}