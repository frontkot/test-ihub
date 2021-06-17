import React from 'react';
import './ActionButton.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';
import { toggleItem } from '../../store/all-items/operations';
import PropTypes from 'prop-types';

const ActionButton = ({
  isFavourite, isDisfavourite, textContent, id
}) => {
  const dispatch = useDispatch();
  const allItems = useSelector(getAllItems);
  const item = allItems.find(e => e.id === id);
  let itemIsFavourite = item.isFavourite;
  let itemIsDisfavourite = item.isDisfavourite;
  
  const toggle = async () => {
    if (isFavourite !== undefined) {
      itemIsFavourite = !itemIsFavourite; // change value of isFavourite
      if(itemIsDisfavourite) {
        itemIsDisfavourite = !itemIsDisfavourite; // is isDisfavourite already true change value of isDifavourite
      }
    } else {
      itemIsDisfavourite = !itemIsDisfavourite; // change value of isDifavourite
      if(itemIsFavourite) {
        itemIsFavourite = !itemIsFavourite; // is isDisfavourite already true change value of isFavourite
      }
    }
    
    const newItem = {...item, isFavourite: itemIsFavourite, isDisfavourite: itemIsDisfavourite}; // sompile new item for sent to store and DB
    dispatch(toggleItem(newItem)) // toggle fav in store operations
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

export default ActionButton;


ActionButton.propTypes = {
  isFavourite: PropTypes.bool,
  isDisfavourite: PropTypes.bool,
  textContent: PropTypes.string,
  id: PropTypes.string,
}

ActionButton.defaultTypes = {
  isFavourite: false,
  isDisfavourite: false,
  textContent: '',
  id: '',
}