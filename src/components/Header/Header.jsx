import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header-container'>
            <div className="header">
                <img src={logo} alt="" />
                <div>
                    <ul className='menu'>
                        <li><Link to={`/`}>Shop</Link></li>
                        <li><Link to={`/orders`}>Order Review</Link></li>
                        <li><Link to={`/inventory`}>Manage Inventory</Link></li>
                        <li><Link to={`/login`}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;