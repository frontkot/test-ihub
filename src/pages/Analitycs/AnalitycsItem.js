import React from 'react';

const AnalitycsItem = ({
  title, result
}) => (
  <div className='analityc__item'>
    <p className='analityc__title'>{title}</p>
    <p className='analityc__result'>{result}</p>
  </div>
);

export default AnalitycsItem;