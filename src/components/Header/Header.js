import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../store/all-items/selectors';

const headerItems = [
  {path: '/', textContent: 'All Specialists'},
  {path: '/favourites', textContent: 'Favorites Specialists', counter: true},
  {path: '/disfavourites', textContent: 'Disfavourites Specialists', counter: true},
  {path: '/add-specialist', textContent: 'Add Specialist'},
  {path: '/analitycs', textContent: 'Analytics'},
]

const Header = () => {
  const items = useSelector(getAllItems);
  const favNum = items.filter(e => e.isFavourite).length;
  const disfavNum = items.filter(e => e.isDisfavourite).length;
  const classNameNavLink = 'header__item';
  const classNameCounter = 'header__counter';

  const navLinkItems = headerItems.map((e, index) => (
    <NavLink 
        key={index}
        exact to={e.path}
        activeStyle={{color: 'coral'}} 
        className={classNameNavLink}
    >
        {e.textContent}
        {e.counter &&
          e.path === '/favourites' ?
            favNum > 0 && <span className={classNameCounter}>{favNum}</span>
          :
            e.path === '/disfavourites' ? 
              disfavNum > 0 && <span className={classNameCounter}>{disfavNum}</span>
            : null
        }
    </NavLink>
  ))

  return (
    <div className='header__bg'>
      <div className='header__container'>
        <nav className='header__content'>
          {navLinkItems}
        </nav>
      </div>
    </div>
  );
};

export default Header;