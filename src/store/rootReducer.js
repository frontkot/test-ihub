import { combineReducers } from "redux";
import allItems from './all-items/reducer';

const reducer = combineReducers({
  allItems,
});

export default reducer;
