import { LOAD_ALL_ITEMS, ALL_ITEMS_LOADING, ADD_NEW_ITEM } from './actionTypes';

const initialState = {
  isLoading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_ITEMS:
      return { ...state, data: action.payload };
    case ALL_ITEMS_LOADING:
      return { ...state, isLoading: action.payload };
    case ADD_NEW_ITEM:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default reducer;
