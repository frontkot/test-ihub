import { DISFAVOURITES_LOADING, SAVE_DISFAVOURITES, TOGGLE_DISFAVOURITES } from './actionTypes';

const initialState = {
    isLoading: false,
    data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case DISFAVOURITES_LOADING:
      return { ...state, isLoading: action.payload }
    case SAVE_DISFAVOURITES:
      return { ...state, data: action.payload }
    case TOGGLE_DISFAVOURITES:
      // const {item, all} = action.payload;
      // const indexArr = state.data.map(e => e.article)
      // let arr;
      // if (indexArr.includes(item)){
      //   arr = state.data.filter(e => e.article !== item)
      // } else {
      //   const favItem = all.filter(e => e.article === item)
      //   arr = [...state.data, ...favItem]
      // }
      // localStorage.setItem('disfavourites-items', JSON.stringify(arr))
      // return { ...state, data: arr}
  }
}

export default reducer;