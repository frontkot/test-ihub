import {  } from './actionTypes';

const initialState = {
  isLoading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOAD_TEMPLATE:
    //   return { ...state, ...action.payload };
    // case TEMPLATE_LOADING:
    //   return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
