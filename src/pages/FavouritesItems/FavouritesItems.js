import React from 'react';
import './FavouritesItems.scss';
import { useSelector } from 'react-redux';
import { getFavouritesItems } from '../../store/favourites/selectors';
import TabItem from '../../components/TabItem/TabItem';

const FavouritesItems = () => {
  const favouritesItems = useSelector(getFavouritesItems);

  if (!favouritesItems.length) {
    return <div>So far, there are no specialists in the category of Favourites</div>
  }

  const renderItems = favouritesItems.map((e, index) => 
    <TabItem
      key={index}
      name={e.name}
      email={e.email}
      isFavourite={e.isFavourite}
      isDisfavourite={e.isDisfavourite}
      specialty={e.specialty}
    />
  )

  return (
    <div>
      {renderItems}
    </div>
  );
};

export default FavouritesItems;