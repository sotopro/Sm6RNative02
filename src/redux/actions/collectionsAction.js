import Actions from '../../resource/Actions';
import {getCollections} from '../../resource/database/products';

const getCollectionsSuccess = (data) => {
  return {
    type: Actions.FETCHING_COLLECTIONS_SUCCESS,
    data,
  };
};

const getCollectionsFailure = (errors) => {
  return {
    type: Actions.FETCHING_CATEGORIES_FAILURE,
    errors,
  };
};

const getAllCollections = () => {
  return async (dispatch, getState) => {
    const collections = await getCollections();
    if (collections.errors) {
      dispatch(getCollectionsFailure(collections.errors));
    } else {
      dispatch(getCollectionsSuccess(collections));
    }
  };
};

export default {
  getAllCollections,
};
