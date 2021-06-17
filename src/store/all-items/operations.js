import { saveAllItemsToStore, allItemsLoading, toggleItemInStore, addNewItemToStore } from './actions';

import db from '../../firebase.config';

export const loadItems = () => async (dispatch) => {
    dispatch(allItemsLoading(true))
    const res = await db.collection('specialists').get();
    dispatch(saveAllItemsToStore(res.docs.map(doc => doc.data()))) // save all items in store
    dispatch(allItemsLoading(false))
}

export const toggleItem = (newItem) => async (dispatch) => {
    dispatch(toggleItemInStore(newItem, newItem.id)) // toggle fav and disfav on store
    await db.collection('specialists').doc(newItem.name).update(newItem); // toggle fav and disfav on DB
}

export const addNewItem = (newItem) => async (dispatch) => {
    dispatch(addNewItemToStore(newItem)); // add new specialist to store
    await db.collection('specialists').doc(newItem.name).set(newItem); // add new specialist to DB
}