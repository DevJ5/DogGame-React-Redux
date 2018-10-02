class userFeedback {
  constructor(correctButton, wrongButton) {
    this.correctButton = correctButton;
    this.wrongButton = wrongButton;
    this.image = document.getElementsByClassName('Image')[0];
    this.header = document.getElementsByClassName('Header')[0];
  }

  rightAnswerStyles() {
    this.image.classList.add('right-answer-image');
    this.header.classList.add('right-answer-header');
    this.correctButton.className = 'correct-button';
  }

  wrongAnswersStyles() {
    this.image.classList.add('wrong-answer-image');
    this.header.classList.add('wrong-answer-header');
    this.correctButton.className = 'correct-button';
    this.wrongButton.className = 'wrong-button';
  }

  defaultStyles() {
    this.image.classList.remove('right-answer-image');
    this.image.classList.remove('wrong-answer-image');
    this.header.classList.remove('right-answer-header');
    this.header.classList.remove('wrong-answer-header');
    this.correctButton.className = 'default-button';
    this.wrongButton.className = 'default-button';
  }

}

export default userFeedback