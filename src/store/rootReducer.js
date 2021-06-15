import { combineReducers } from "redux";
import template from './template/reducer';
import favourites from './favourites/reducer';
import disfavourites from './disfavourites/reducer';

const reducer = combineReducers({
  template,
  favourites,
  disfavourites,
});

export default reducer;
