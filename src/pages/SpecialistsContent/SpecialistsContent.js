import React, { useState } from 'react';
import TabItem from '../../components/TabItem/TabItem';
import Select from "react-select";
import './SpecialistsContent.scss';
import PropTypes from 'prop-types';

const SpecialistsContent = ({
  items
}) => {
  const filterOptions = [
    {label: 'All specialists', value: 'all'},
    {label: 'Psychologists', value: 'psychologist'},
    {label: 'Psychotherapists', value: 'psychotherapist'},
    {label: 'Psychiatrists', value: 'psychiatrist'},
  ];
  
  const [filterFeature, setFilterFeature] = useState(filterOptions[0]);
  let arrForRender;

  switch (filterFeature.value) {
    case filterOptions[1].value:
      arrForRender = items.filter(e => e.specialty === filterOptions[1].value); // When choose 'Psychologists' 
      break;
    case filterOptions[2].value:
      arrForRender = items.filter(e => e.specialty === filterOptions[2].value); // When choose 'Psychotherapists' 
      break
    case filterOptions[3].value:
      arrForRender = items.filter(e => e.specialty === filterOptions[3].value); // When choose 'Psychiatrists' 
      break
    default:
      arrForRender = items; // When choose 'All specialists' 
      break;
  }

  const renderItems = arrForRender.map((e, index) => // map items for tender
    <TabItem
      key={index}
      item={e}
    />
  )

  return (
    <>
      <div className='specialists__select'>
        <h3 className='specialists__select--title'>Choose the required specialty</h3>
        <Select
          type='text'
          options={filterOptions}
          defaultValue={filterFeature}
          className='specialists__select--field'
          onChange={option => setFilterFeature(option)}
        />
      </div>
      {
        renderItems.length ? 
            <ul className='specialists__content'>
              {renderItems}
            </ul>
          :
            <h3 className='specialists__empty'>Unfortunately, there are no such specialists.</h3> // render if there are no specialists of this category
      }
    </>
  );
};

export default SpecialistsContent;

SpecialistsContent.propTypes = {
  items: PropTypes.array,
};

SpecialistsContent.defaultProps = {
  items: [],
};