import { SAVE_FAVOURITES, TOGGLE_FAVOURITES, FAVOURITES_LOADING } from './actionTypes';

export const favouritesLoading = (isLoading) => ({
  type: FAVOURITES_LOADING, 
  payload: isLoading
})

export const saveFavourites = (items) => ({
  type: SAVE_FAVOURITES, 
  payload: items
})

// export const toggleFav = (index, arr) => ({
//   type: favoritesActions.TOGGLE_FAVOURITES, 
//   payload: {item: index, all: arr}
// })