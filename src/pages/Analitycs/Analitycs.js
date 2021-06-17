import React from 'react';
import './Analitycs.scss';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';
import AnalitycItem from './AnalitycsItem';

const Analitycs = () => {
  const allItems = useSelector(getAllItems); // get all items
  const totalPsychologist = allItems.filter(e => e.specialty === 'psychologist'); // get only psychologist items
  const totalPsychotherapist = allItems.filter(e => e.specialty === 'psychotherapist'); // get only psychotherapist  items
  const totalPsychiatrist = allItems.filter(e => e.specialty === 'psychiatrist'); // get only psychiatrist items
  const totalFav = allItems.filter(e => e.isFavourite); // get only fav items
  const totalDisfav = allItems.filter(e => e.isDisfavourite); // get only dusfav items

  return (
    <div className='analityc__container'>
      <h2 className='analityc__header'>Analitycs</h2>
      <div className='analityc__content'>
        <AnalitycItem title='Total specialists' result={allItems.length} />
        <AnalitycItem title='Total psychologist' result={totalPsychologist.length} />
        <AnalitycItem title='Total psychotherapist' result={totalPsychotherapist.length} />
        <AnalitycItem title='Total psychiatrist' result={totalPsychiatrist.length} />
        <AnalitycItem title='Total favourites' result={totalFav.length} />
        <AnalitycItem title='Total disfavourites' result={totalDisfav.length} />
      </div>
    </div>
  );
};

export default Analitycs;