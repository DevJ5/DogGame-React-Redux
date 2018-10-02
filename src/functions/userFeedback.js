export default (targetValue, correct, nextQuestion) => {
  const bodyStyle = document.body.style;

  if (targetValue === correct) {
    // Show something green

    bodyStyle.backgroundColor = 'green';

    setTimeout(() => {

      bodyStyle.backgroundColor = 'white';

      nextQuestion();
    }, 500);

  } else {
    // Show something red and wait 2 seconds before showing

    const correctButton = document.getElementById('button-' + correct);
    const wrongButton = document.getElementById('button-' + targetValue);

      bodyStyle.backgroundColor = 'red';
      correctButton.className = 'correct-button';
      wrongButton.className = 'wrong-button';

    setTimeout(() => {

      bodyStyle.backgroundColor = 'white';
      correctButton.className = 'default-button';
      wrongButton.className = 'default-button';

      nextQuestion();
    }, 2000);
  }


}