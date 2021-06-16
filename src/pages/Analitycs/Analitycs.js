import React from 'react';
import './Analitycs.scss';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';

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
        <h4 className='analityc__title'>Total specialists</h4>
        <p className='analitycs__result'>{allItems.length}</p>
        <h4 className='analityc__title'>Total psychologist</h4>
        <p className='analitycs__result'>{totalPsychologist.length}</p>
        <h4 className='analityc__title'>Total psychotherapist</h4>
        <p className='analitycs__result'>{totalPsychotherapist.length}</p>
        <h4 className='analityc__title'>Total psychiatrist</h4>
        <p className='analitycs__result'>{totalPsychiatrist.length}</p>

        <h4 className='analityc__title'>Total favourites</h4>
        <p className='analitycs__result'>{totalFav.length}</p>
        <h4 className='analityc__title'>Total disfavourites</h4>
        <p className='analitycs__result'>{totalDisfav.length}</p>
      </div>
    </div>
  );
};

export default Analitycs;