import axios from 'axios';
import { saveAllItems, allItemsLoading } from './actions';

export const loadItems = () => (dispatch) => {
    dispatch(allItemsLoading(true))
    axios('./items.json')
        .then(res => {
        dispatch(saveAllItems(res.data.items))
        dispatch(allItemsLoading(false))
    })
}