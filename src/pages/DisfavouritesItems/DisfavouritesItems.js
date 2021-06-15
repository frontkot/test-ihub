import React from 'react';
import './DisfavouritesItems.scss';
import { useSelector } from 'react-redux';
import { getDisfavouritesItems } from '../../store/disfavourites/selectors';
import TabItem from '../../components/TabItem/TabItem';

const DisfavouritesItems = () => {
  const disfavouritesItem = useSelector(getDisfavouritesItems);

  const renderItems = disfavouritesItem.map(e => 
    <TabItem
      name={e.name}
      email={e.email}
    />
  )

  return (
    <div className='main__container'>
      {renderItems}
    </div>
  );
};

export default DisfavouritesItems;