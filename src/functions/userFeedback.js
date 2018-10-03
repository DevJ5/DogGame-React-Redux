class userFeedback {
  constructor(correctButton, wrongButton) {
    this.correctButton = correctButton;
    this.wrongButton = wrongButton;
    this.image = document.getElementsByClassName('Image')[0];
  }

  rightAnswerStyles() {
    this.image.classList.add('right-image');
    this.correctButton.classList.add('right-button');
  }

  wrongAnswersStyles() {
    this.image.classList.add('wrong-image');
    this.correctButton.classList.add('right-button');
    this.wrongButton.classList.add('wrong-button');
  }

  defaultStyles() {
    this.image.classList.remove('right-image');
    this.image.classList.remove('wrong-image');
    this.correctButton.classList.remove('right-button');
    this.wrongButton.classList.remove('wrong-button');
  }

}

export default userFeedback