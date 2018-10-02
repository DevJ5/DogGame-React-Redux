import {
  rightAnswerStyles,
  wrongAnswersStyles,
  defaultStyles
} from './answerStyles'

export default (
  targetValue,
  correct,
  nextQuestion,
  incrementScore,
  incrementQuestionsAsked,
  incrementWinStreak,
  resetWinStreak
) => {

  const correctButton = document.getElementById('button-' + correct);
  const wrongButton = document.getElementById('button-' + targetValue);

  incrementQuestionsAsked();

  if (targetValue === correct) {
    // Show something green
    incrementScore(); // dispatch the ADD_TO_SCORE
    incrementWinStreak();

    rightAnswerStyles();

    setTimeout(() => {
      defaultStyles(correctButton, wrongButton);

      nextQuestion();
    }, 500);
  } else {
    // Show something red and wait 2 seconds before showing
    resetWinStreak();
    wrongAnswersStyles(correctButton, wrongButton);

    setTimeout(() => {
      defaultStyles(correctButton, wrongButton);

      nextQuestion();
    }, 2000);
  }
};
