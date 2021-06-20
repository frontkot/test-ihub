import React from 'react';
import './TabItem.scss';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton/ActionButton';
import { deleteItem } from '../../store/all-items/operations';
import { useDispatch } from 'react-redux';

const TabItem = ({
  item
}) => {
  const dispatch = useDispatch();
  const { name, email, isFavourite, isDisfavourite, specialty, id } = item;

  return (
    <li className='tab__item'>
      <button className='tab__button--delete' onClick={() => dispatch(deleteItem(item))} />
      <h3 className='tab__header'>{name}</h3>
      <p className='tab__par'>Specialty: {specialty}</p>
      <p className='tab__par'>Email: {email}</p>
      <div className='tab__button--container'>
        <ActionButton
          id={id}
          isFavourite={isFavourite}
          textContent='Favourites'
        />
        <ActionButton
          id={id}
          isDisfavourite={isDisfavourite}
          textContent='Disfavourites'
        />
      </div>
    </li>
  );
}

export default TabItem;

TabItem.propTypes = {
  item: PropTypes.object, 
};

TabItem.defaultProps = {
  item: {}, 
};