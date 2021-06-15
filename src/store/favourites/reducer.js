import { FAVOURITES_LOADING, SAVE_FAVOURITES, TOGGLE_FAVOURITES } from './actionTypes';

const initialState = {
    isLoading: false,
    data: JSON.parse(localStorage.getItem('favourites-items')) || [
      {name: 'Sergey Belyi', email: 'Sergey@gmail.com'},
      {name: 'Igor Belyi', email: 'Igor@gmail.com'},
    ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case FAVOURITES_LOADING:
      return { ...state, isLoading: action.payload }
    case SAVE_FAVOURITES:
      return { ...state, data: action.payload }
    case TOGGLE_FAVOURITES:
      // const {item, all} = action.payload;
      // const indexArr = state.data.map(e => e.article)
      // let arr;
      // if (indexArr.includes(item)){
      //   arr = state.data.filter(e => e.article !== item)
      // } else {
      //   const favItem = all.filter(e => e.article === item)
      //   arr = [...state.data, ...favItem]
      // }
      // localStorage.setItem('favourites-items', JSON.stringify(arr))
      // return { ...state, data: arr}
  }
}

export default reducer;