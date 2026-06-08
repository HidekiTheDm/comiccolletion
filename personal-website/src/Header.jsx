import './Header.css';
import React from 'react';
import xMen from './assets/X-Men-logo-comics.png';


function Header() {
    return (
            <header>

                <img className='companyLogo' src={xMen} alt='topImage' width='40px' />
                <div className='pageName'> Ziggy's Comic Colletion</div>

            </header>
    ); 
}

export default Header;