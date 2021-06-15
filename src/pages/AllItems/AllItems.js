import React from 'react';
import './AllItems.scss';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';
import TabItem from '../../components/TabItem/TabItem';

const AllItems = () => {
  const items = useSelector(getAllItems);

  const renderItems = items.map(e => 
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

export default AllItems;