import shuffleArray from "../helpers/shuffleArray";
import capitalize from "../helpers/capitalize";

export const GET_ANSWERS = "GET_ANSWERS";

export default (state = [], action = {}) => {
  switch(action.type) {

    case GET_ANSWERS:

      const { correctBreed, allBreeds} = action.payload;

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

    default:
      return state;

  }
}