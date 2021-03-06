import database from '@react-native-firebase/database';

const referenceProducts = database().ref('/products');
const referenceCategories = database().ref('/categories');
const referenceCollections = database().ref('/collections');

export const getProducts = () => {
  const data = referenceProducts.once('value').then((snapshot) => {
    return snapshot.val();
  });
  return data;
};

export const getCategories = () => {
  const data = referenceCategories.once('value').then((snapshot) => {
    return snapshot.val();
  });
  return data;
};

export const getCollections = () => {
  const data = referenceCollections.once('value').then((snapshot) => {
    return snapshot.val();
  });
  return data;
};
