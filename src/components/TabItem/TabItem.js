import React from 'react';
import './TabItem.scss';
// import ActionIcon from '../ActionIcon/ActionIcon';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getFavPsy } from '../../store/favorites/selectors';
import { useLocation } from 'react-router-dom';
import './Item.scss'

const TabItem = ({
  className, name, email, article,
}) => {
  const location = useLocation();
  // const favItemsId = useSelector(getFavoritesProducts).map(e => e.article)
  // const cartPage = location.pathname === '/cart';
  // const isFavorite = favItemsId.includes(article);

  return (
    <li id={article} className={className}>
    <h3>{name}</h3>
    {/* <ActionIcon type={cartPage ? 'cross' : 'star'} 
        filled={isFavorite} 
        id={article}
    /> */}
    {/* <img 
        src={url} 
        style={{borderRadius: '10px'}} 
        alt='item-img'
    /> */}
    <p>Email: {email}</p>
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