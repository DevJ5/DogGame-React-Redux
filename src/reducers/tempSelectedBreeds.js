export const ADD_THREE_UNIQUES = 'ADD_THREE_UNIQUES';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_THREE_UNIQUES:
      // receive all breeds and transform into 3 unique breeds
      const allBreeds = action.payload;
      console.log(allBreeds);
      const breedsInArray = [];
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
      breedsInArray.push(pushUniqueBreed());
      return breedsInArray;

    default:
      return state;
  }
};
