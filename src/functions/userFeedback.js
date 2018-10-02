export default (targetValue, correct, nextQuestion) => {
  if (targetValue === correct) {
    // Show something green
    document.body.style.backgroundColor = 'green';
    setTimeout(() => {
      document.body.style.backgroundColor = 'white';
      nextQuestion();
    }, 500);
  } else {
    // Show something red and wait 2 seconds before showing
    document.body.style.backgroundColor = 'red';
    document.getElementById(
      'button-' + correct
    ).style.background = 'green';
    setTimeout(() => {
      document.body.style.backgroundColor = 'white';
      document.getElementById(
        'button-' + correct
      ).UseVisualStyleBackColor = true;
      nextQuestion();
    }, 2000);
  }
}