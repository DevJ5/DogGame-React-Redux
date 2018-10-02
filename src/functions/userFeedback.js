class userFeedback {
  constructor(correctButton, wrongButton) {
    this.correctButton = correctButton;
    this.wrongButton = wrongButton;
  }

  rightAnswerStyles() {
    this.correctButton.className = 'correct-button';
  }

  wrongAnswersStyles() {
    this.correctButton.className = 'correct-button';
    this.wrongButton.className = 'wrong-button';
  }

  defaultStyles() {
    this.correctButton.className = 'default-button';
    this.wrongButton.className = 'default-button';
  }

}

export default userFeedback