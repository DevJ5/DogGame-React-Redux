export const HANDLE_THE_KEY = "HANDLE_THE_KEY";

export default (state = 0, action) => {
  switch (action.type) {
    case HANDLE_THE_KEY: {
      return action.payload;
    }
    default:
      return state;
  }
};
