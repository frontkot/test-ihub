import { ALL_ITEMS_LOADING, LOAD_ALL_ITEMS, ADD_NEW_ITEM, TOGGLE_ITEM } from './actionTypes';

export const allItemsLoading = (isLoading) => ({
  type: ALL_ITEMS_LOADING, 
  payload: isLoading
})

export const saveAllItemsToStore = (items) => ({
  type: LOAD_ALL_ITEMS, 
  payload: items
})

export const addNewItemToStore = (newItem) => ({
  type: ADD_NEW_ITEM,
  payload: newItem
})

export const toggleItemInStore = (newItem, id) => ({
  type: TOGGLE_ITEM,
  payload: {newItem: newItem, id: id}
})