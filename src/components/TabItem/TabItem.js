import React from 'react';
import './TabItem.scss';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton/ActionButton';

const TabItem = ({
  name, email, isFavourite, isDisfavourite, specialty, id
}) => (
  <li className='tab__item'>
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

export default TabItem;

TabItem.propTypes = {
  className: PropTypes.string, 
  name: PropTypes.string,
  email: PropTypes.string,
  specialty: PropTypes.string,
  isFavourite: PropTypes.bool,
  isDisfavourite: PropTypes.bool,
  id: PropTypes.string,
};

TabItem.defaultProps = {
  className: '', 
  name: '',
  email: '',
  specialty: '',
  isFavourite: false,
  isDisfavourite: false,
  id: '',
};