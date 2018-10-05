import { PAY_FIFTY_COINS } from "../reducers/balance";
import { DISABLE_WRONG_BUTTONS } from "../reducers/answers";

export const payFiftyCoins = () => ({
  type: PAY_FIFTY_COINS
});

export const disableWrongButtons = (correctBreed, answers) => ({
  type: DISABLE_WRONG_BUTTONS,
  payload: {
    correctBreed,
    answers
  }
});
