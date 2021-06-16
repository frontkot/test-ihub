import React from 'react';
import './ActionIcon.scss'

const ActionIcon = ({
  isActive, iconSrc, textContent
}) => {
  return (
    // <icon src={iconSrc}/>
    <button className={isActive ? 'active__button' : 'non-active__button'}>
      {textContent}
    </button>
  );
};

export default ActionIcon;