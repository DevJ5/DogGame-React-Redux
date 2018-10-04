import { HANDLE_HINT_CLICK } from "../reducers/answers";

export const freeHintAction = (correctBreed, answers) => ({
  type: HANDLE_HINT_CLICK,
  payload: {
    correctBreed,
    answers
  }
});