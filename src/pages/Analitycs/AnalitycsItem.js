import React from 'react';

const AnalitycsItem = ({
  title, result
}) => (
  <>
    <h4 className='analitycs__title'>{title}</h4>
    <p className='analitycs__result'>{result}</p>
  </>
);


export default AnalitycsItem;