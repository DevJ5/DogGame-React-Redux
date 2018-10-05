import HANDLE_THE_KEY from "../reducers/KeyBinding";

export const keyHandeling = event => ({
  type: HANDLE_THE_KEY,
  payload: {
    event
  }
});
