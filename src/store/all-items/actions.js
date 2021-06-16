import { ALL_ITEMS_LOADING, LOAD_ALL_ITEMS } from './actionTypes';

export const allItemsLoading = (isLoading) => ({
  type: ALL_ITEMS_LOADING, 
  payload: isLoading
})

export const saveAllItems = (items) => ({
  type: LOAD_ALL_ITEMS, 
  payload: items
})