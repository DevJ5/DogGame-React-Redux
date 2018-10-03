import './userFeedback';
import userFeedback from './userFeedback';

export default (
  targetValue,
  correctBreed,
  nextQuestion,
  incrementScore,
  incrementQuestionsAsked,
  incrementWinStreak,
  resetWinStreak
) => {
  const userFeedBack = new userFeedback(
    document.getElementById('button-' + correctBreed),
    document.getElementById('button-' + targetValue)
  );

  incrementQuestionsAsked();

  if (targetValue === correctBreed) {
    // Correct answer given -> Show something green
    incrementScore();
    incrementWinStreak();

    userFeedBack.rightAnswerStyles();

    setTimeout(() => {
      userFeedBack.defaultStyles();

      nextQuestion();
    }, 500);
  } else {
    // Wrong answer given -> Show something red and wait 2 seconds
    resetWinStreak();
    userFeedBack.wrongAnswersStyles();

    setTimeout(() => {
      userFeedBack.defaultStyles();

      nextQuestion();
    }, 2000);
  }
};
