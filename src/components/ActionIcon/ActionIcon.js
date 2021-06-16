import React from 'react';
import './ActionIcon.scss'
import { useDispatch } from 'react-redux';

const ActionIcon = ({
  isActive, iconSrc, textContent
}) => {
  const dispatch = useDispatch();


  
  return (
    // <icon src={iconSrc}/>
    <button 
      className={isActive ? 'active__button' : 'non-active__button'}
    >
      {textContent}
    </button>
  );
};

export default ActionIcon;