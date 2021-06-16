import axios from 'axios';
import { saveDisfavourites, disfavouritesLoading } from './actions';

export const loadDisfavourites = () => (dispatch) => {
    dispatch(disfavouritesLoading(true))
    axios('./items.json')
        .then(res => {
            const disfavItems = res.data.items.filter(e => e.isDisfavourite)
            dispatch(saveDisfavourites(disfavItems))
            dispatch(disfavouritesLoading(false))
    })
}
// export const toggleFavorites = (index, arr) => (dispatch) => {
//     dispatch(toggleFav(index, arr))
// }
