import React from 'react';
import './ActionIcon.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';
import { toggleItem } from '../../store/all-items/operations';

const ActionIcon = ({
  isFavourite, isDisfavourite, textContent, id
}) => {
  const dispatch = useDispatch();
  const allItems = useSelector(getAllItems);
  const item = allItems.find(e => e.id === id);
  let itemIsFavourite = item.isFavourite;
  let itemIsDisfavourite = item.isDisfavourite;
  
  const toggle = async () => {
    if (isFavourite !== undefined) {
      itemIsFavourite = !itemIsFavourite;
      if(itemIsDisfavourite) {
        itemIsDisfavourite = !itemIsDisfavourite;
      }
    } else {
      itemIsDisfavourite = !itemIsDisfavourite;
      if(itemIsFavourite) {
        itemIsFavourite = !itemIsFavourite
      }
    }
    
    const newItem = {...item, isFavourite: itemIsFavourite, isDisfavourite: itemIsDisfavourite};
    dispatch(toggleItem(newItem))
  }
  return (
    <button 
      className={isFavourite || isDisfavourite ? 'active__button' : 'non-active__button'}
      onClick={toggle}
    >
      {textContent}
    </button>
  );
};

export default ActionIcon;