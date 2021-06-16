import React from 'react';
import './Footer.scss'
import { getAllItems } from '../../store/all-items/selectors';
import { getFavouritesItems } from '../../store/favourites/selectors';
import { getDisfavouritesItems } from '../../store/disfavourites/selectors';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const page = location.pathname;
    const allItems = useSelector(getAllItems);
    const favItems = useSelector(getFavouritesItems);
    const disfavItems = useSelector(getDisfavouritesItems);
    const fixedFooterClassName = 'footer-bg footer-fixed';
    const normalFooterClassName = 'footer-bg';

    let items;
    switch(page) {
        case '/favorites':
            items = favItems;
            break;
        case '/disfavourites': 
            items = disfavItems;
            break;
        case '/': 
            items = allItems;
            break;
        default:
            items = [];
            break;
    }

    return (
        <div className={
                allItems.length < 5 ? 
                    allItems.length > 0 ?
                        window.innerHeight < 650 ? normalFooterClassName :  fixedFooterClassName 
                    : fixedFooterClassName
                : normalFooterClassName
            }>
            <div className='container'>
                <p>Aaa...Together because...</p>
            </div>
        </div>
    );
}

export default Footer;