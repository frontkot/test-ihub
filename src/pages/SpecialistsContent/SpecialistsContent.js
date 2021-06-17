import React, { useState } from 'react';
import TabItem from '../../components/TabItem/TabItem';
import Select from "react-select";
import './SpecialistsContent.scss';

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
      arrForRender = items.filter(e => e.specialty === filterOptions[1].value);
      break;
    case filterOptions[2].value:
      arrForRender = items.filter(e => e.specialty === filterOptions[2].value);
      break
    case filterOptions[3].value:
      arrForRender = items.filter(e => e.specialty === filterOptions[3].value);
      break
    default:
      arrForRender = items;
      break;
  }

  const renderItems = arrForRender.map((e, index) => 
  <TabItem
    key={index}
    name={e.name}
    email={e.email}
    isFavourite={e.isFavourite}
    isDisfavourite={e.isDisfavourite}
    specialty={e.specialty}
    id={e.id}
  />
)

  return (
    <>
      <div className='specialists__select'>
        <h4 className='specialists__select--title'>Choose the required specialty</h4>
        <Select
          type='text'
          options={filterOptions}
          defaultValue={filterFeature}
          className='specialists__select--field'
          onChange={option => setFilterFeature(option)}
        />
      </div>
      <ul className='specialists__content'>
        {renderItems.length 
          ?
            renderItems 
          : 
            <h3 className='specialists__empty'>Unfortunately, there are no such specialists.</h3>
        }
      </ul>
    </>
  );
};

export default SpecialistsContent;