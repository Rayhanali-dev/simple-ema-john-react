import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header-container'>
            <div className="header">
            <img src={logo} alt="" />
            <div>
                <ul className='menu'>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Header;