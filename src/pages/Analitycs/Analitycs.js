import React from 'react';
import './Analitycs.scss';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';
import AnalitycItem from './AnalitycsItem';

const Analitycs = () => {
  const allItems = useSelector(getAllItems);
  const totalPsychologist = allItems.filter(e => e.specialty === 'psychologist');
  const totalPsychotherapist = allItems.filter(e => e.specialty === 'psychotherapist');
  const totalPsychiatrist = allItems.filter(e => e.specialty === 'psychiatrist');
  const totalFav = allItems.filter(e => e.isFavourite);
  const totalDisfav = allItems.filter(e => e.isDisfavourite);

  return (
    <div className='analityc__container'>
      <h2 className='analityc__header'>Analitycs</h2>
      <div className='amalityc__content'>
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