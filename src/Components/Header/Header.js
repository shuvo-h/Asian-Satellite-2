import React from 'react';
import './header.css';
import Banner from '../../images/banner.png';

const Header = () => {

    return (
        <div className='header-container'>
            <div>
                <h1>Asian Satelite 2</h1>
                <h2>Total Budget $500000</h2>
            </div>
            <img className='banner' src={Banner} alt="" />
            
        </div>
    );
};

export default Header;