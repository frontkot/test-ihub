import React from 'react';
import './DisfavouritesItems.scss';
import { useSelector } from 'react-redux';
import { getDisfavouritesItems } from '../../store/disfavourites/selectors';
import TabItem from '../../components/TabItem/TabItem';

const DisfavouritesItems = () => {
  const disfavouritesItem = useSelector(getDisfavouritesItems);

  if (!disfavouritesItem.length) {
    return <div>So far, there are no specialists in the category of Disfavourites</div>
  }

  const renderItems = disfavouritesItem.map((e, index) => 
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
    <div className='main__container'>
      {renderItems}
    </div>
  );
};

export default DisfavouritesItems;