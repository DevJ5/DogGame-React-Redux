import { combineReducers } from "redux";
import currentScore from "./currentScore";
import numberOfQuestionsAsked from "./numberOfQuestionsAsked";

export default combineReducers({
  currentScore,
  numberOfQuestionsAsked
})