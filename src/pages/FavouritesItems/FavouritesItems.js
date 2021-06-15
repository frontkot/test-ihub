import React from 'react';
import './FavouritesItems.scss';
import { useSelector } from 'react-redux';
import { getFavouritesItems } from '../../store/favourites/selectors';
import TabItem from '../../components/TabItem/TabItem';

const FavouritesItems = () => {
  const favouritesItems = useSelector(getFavouritesItems);

  const renderItems = favouritesItems.map(e => 
    <TabItem
      name={e.name}
      email={e.email}
    />
  )

  return (
    <div>
      {renderItems}
    </div>
  );
};

export default FavouritesItems;