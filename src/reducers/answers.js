import shuffleArray from "../helpers/shuffleArray";
import capitalize from "../helpers/capitalize";
import { HANDLE_HINT_CLICK } from "../actions/FreeHintActions";

export const GET_ANSWERS = "GET_ANSWERS";

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

      return shuffleArray(breedsInArray).map(breed => capitalize(breed));

    case HANDLE_HINT_CLICK:

      const { correctBreed: correctBreed2, answers } = action.payload;

      const select = () => {
        const random = Math.floor(Math.random() * answers.length);
        if (answers[random] !== correctBreed2) {
          return random;
        }
        return select();
      };

      const selected = select()

      answers[selected] = '_' + answers[selected];

      return JSON.parse(JSON.stringify(answers));

    default:
      return state;

  }
}