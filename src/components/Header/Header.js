import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const headerItems = [
  {path: '/', textContent: 'All Psychologists'},
  {path: '/favourites', textContent: 'Favorites Psychologists', counter: true},
  {path: '/disfavourites', textContent: 'Disfavourites Psychologists', counter: true},
  {path: '/add-specialist', textContent: 'Add Specialist'},
  {path: '/analitycs', textContent: 'Analytics'},
]

const Header = () => {
  // const favNum = useSelector(getFavPsy).length;
  // const disfavNum = useSelector(getDisfavPsy).length;
  const classNameNavLink = 'header__item';
  const classNameCounter = 'header__counter';


  const navLinkItems= headerItems.map((e) => (
          <NavLink 
              exact to={e.path}
              activeStyle={{color: 'coral'}} 
              className={classNameNavLink}
          >
              {e.text}
              {e.counter &&
                {/* favNum > 0 && <span className={classNameCounter}>{favNum}</span> */}
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