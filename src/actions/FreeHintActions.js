export const HANDLE_HINT_CLICK = 'HANDLE_HINT_CLICK';

export const freeHintAction = (correctBreed, answers) => ({
  type: HANDLE_HINT_CLICK,
  payload: {
    correctBreed,
    answers
  }
});