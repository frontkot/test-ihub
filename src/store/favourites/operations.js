import axios from 'axios';
import { saveFavourites, favouritesLoading } from './actions';

export const loadFavourites = () => (dispatch) => {
    dispatch(favouritesLoading(true))
    axios('./items.json')
        .then(res => {
          const favItems = res.data.items.filter(e => e.isFavourite)
          dispatch(saveFavourites(favItems))
          dispatch(favouritesLoading(false))
    })
}

// export const toggleFavorites = (index, arr) => (dispatch) => {
//     dispatch(toggleFav(index, arr))
// }
