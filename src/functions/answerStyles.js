export function rightAnswerStyles() {

}

export function wrongAnswersStyles(correctButton, wrongButton) {
  correctButton.className = 'correct-button';
  wrongButton.className = 'wrong-button';
}

export function defaultStyles(correctButton, wrongButton) {
  correctButton.className = 'default-button';
  wrongButton.className = 'default-button';
}