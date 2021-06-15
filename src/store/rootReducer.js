import { combineReducers } from "redux";
import allItems from './all-items/reducer';
import favouritesItems from './favourites/reducer';
import disfavouritesItems from './disfavourites/reducer';

const reducer = combineReducers({
  allItems,
  favouritesItems,
  disfavouritesItems,
});

export default reducer;
