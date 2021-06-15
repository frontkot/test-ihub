import { SAVE_DISFAVOURITES, TOGGLE_DISFAVOURITES, DISFAVOURITES_LOADING } from './actionTypes';

export const disfavouritesLoading = (isLoading) => ({
  type: DISFAVOURITES_LOADING, 
  payload: isLoading
})

export const saveDisfavourites = (items) => ({
  type: SAVE_DISFAVOURITES, 
  payload: items
})

// export const toggleFav = (index, arr) => ({
//   type: favoritesActions.TOGGLE_DISFAVOURITES, 
//   payload: {item: index, all: arr}
// })