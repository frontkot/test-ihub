import React from 'react';
import './TabItem.scss';
import PropTypes from 'prop-types';
import ActionIcon from '../ActionIcon/ActionIcon';

const TabItem = ({
  className, name, email, isFavourite, isDisfavourite, specialty, id
}) => {
  
  return (
    <li className={className}>
      <h3>{name}</h3>
      <p>Specialty: {specialty}</p>
      <p>Email: {email}</p>
      <ActionIcon
        id={id}
        isFavourite={isFavourite}
        textContent='Favourites'
      />
      <ActionIcon
        id={id}
        isDisfavourite={isDisfavourite}
        textContent='Disfavourites'
      />
    </li>
  );
};

export default TabItem;

TabItem.propTypes = {
    className: PropTypes.string, 
    name: PropTypes.string,
    email: PropTypes.string,
    article: PropTypes.string,
};

TabItem.defaultProps = {
    className: '', 
    name: '',
    email: '',
    article: '',
};