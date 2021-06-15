import { LOAD_ALL_ITEMS, ALL_ITEMS_LOADING } from './actionTypes';

const initialState = {
  isLoading: false,
  data: [
    {name: 'Igor Belyi', email: 'Igor@gmail.com'},
    {name: 'Sergey Belyi', email: 'Sergey@gmail.com'},
    {name: 'Vladislav Belyi', email: 'Vladislav@gmail.com'},
    {name: 'Dmitriy Belyi', email: 'Dmitriy@gmail.com'},
    {name: 'Anastasiya Belaya', email: 'Anastasiya@gmail.com'},
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_ITEMS:
      return { ...state, ...action.payload };
    case ALL_ITEMS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
