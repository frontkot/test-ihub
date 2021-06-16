import { ALL_ITEMS_LOADING, LOAD_ALL_ITEMS, ADD_NEW_ITEM } from './actionTypes';

export const allItemsLoading = (isLoading) => ({
  type: ALL_ITEMS_LOADING, 
  payload: isLoading
})

export const saveAllItems = (items) => ({
  type: LOAD_ALL_ITEMS, 
  payload: items
})

export const addNewItem = (newItem) => ({
  type: ADD_NEW_ITEM,
  payload: newItem
})