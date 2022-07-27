import shopActionTypes from "./shop.types";
export const updateCollection = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
