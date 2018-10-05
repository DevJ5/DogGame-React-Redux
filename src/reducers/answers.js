import shuffleArray from "../helpers/shuffleArray";
import capitalize from "../helpers/capitalize";
import extractBreedName from "../helpers/extractBreedName";

export const GET_ANSWERS = "GET_ANSWERS";
export const GET_ANSWERS_FROM_IMAGES = 'GET_ANSWERS_FROM_IMAGES';
export const HANDLE_HINT_CLICK = 'HANDLE_HINT_CLICK';
export const DISABLE_WRONG_BUTTONS = 'DISABLE_WRONG_BUTTONS';

export default (state = [], action = {}) => {
  switch (action.type) {

    case GET_ANSWERS:

      const { correctBreed, allBreeds } = action.payload;

      const breedsInArray = [correctBreed];
      const getRandomBreed = () =>
        allBreeds[Math.floor(Math.random() * allBreeds.length)];
      // Create uniques
      const pushUniqueBreed = () => {
        const randomBreed = getRandomBreed();
        if (!breedsInArray.includes(randomBreed)) {
          return randomBreed;
        }
        return pushUniqueBreed();
      };
      breedsInArray.push(pushUniqueBreed());
      breedsInArray.push(pushUniqueBreed());

      return shuffleArray(breedsInArray);

    case GET_ANSWERS_FROM_IMAGES:

      return action.payload.map(breed => extractBreedName(breed));

    case HANDLE_HINT_CLICK:

      const { correctBreed: correctBreed2, answers } = action.payload;

      const select = () => {
        const random = Math.floor(Math.random() * answers.length);
        if (answers[random] !== correctBreed2) {
          return random;
        }
        return select();
      };

      const selected = select();

      answers[selected] = '_' + answers[selected];

      return JSON.parse(JSON.stringify(answers));

    case DISABLE_WRONG_BUTTONS:

      const { correctBreed: correctBreed3, answers: answers2 } = action.payload;
      console.log(answers2.map(answer => {
        console.log(answer === correctBreed3, answer, correctBreed3);
        return answer === correctBreed3 ? answer : ('_' + answer)
      }));
      return answers2.map(answer => answer === correctBreed3 ? answer : ('_' + answer));

    default:
      return state;

  }
}