import React from 'react';
import './TabItem.scss';
import PropTypes from 'prop-types';
import ActionIcon from '../ActionIcon/ActionIcon';

const TabItem = ({
  className, name, email, article, isFavourite, isDisfavourite
}) => {
  
  return (
    <li id={article} className={className}>
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <ActionIcon 
      isActive={isFavourite}
      textContent='Favourites'
    />
    <ActionIcon 
      isActive={isDisfavourite}
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