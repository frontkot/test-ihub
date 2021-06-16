import React from 'react';
import './SpecialistsTab.scss';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';
import SpecialistsContent from '../SpecialistsContent/SpecialistsContent';
import { Link } from 'react-router-dom';

const SpecialistsTab = ({
  content
}) => {
  const items = useSelector(getAllItems);
  let tabArr;

  // content selection depending on the desired tab
  switch (content) {
    case 'favourites':
      tabArr = items.filter(e => e.isFavourite);
      break;
    case 'disfavourites':
      tabArr = items.filter(e => e.isDisfavourite);
      break;
    default:
      tabArr = items;
      break;
  }

  const renderContent = tabArr.length ? // if there are no items
          <SpecialistsContent items={tabArr}/>
        :
          <>
            <h2 className='none-items'>At the moment there are no specialists</h2>
            <Link className='page404-button' to={'/add-specialist'}>Add a new specialist</Link>
          </>

  return (
    <div className='tab__container'>
        {renderContent}
    </div>
  );
};

export default SpecialistsTab;