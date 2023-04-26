import React, { useContext } from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <nav className='header-container'>
            <div className="header">
                <img src={logo} alt="" />
                <ul className='menu'>
                    <li><Link to={`/`}>Shop</Link></li>
                    <li><Link to={`/orders`}>Order Review</Link></li>
                    <li><Link to={`/inventory`}>Manage Inventory</Link></li>
                    <li><Link to={`/login`}>Login</Link></li>
                    <li><Link to={`/signup`}>Sign Up</Link></li>
                    {
                        user && <div>
                            <span className='text-white'>{user.email}</span>
                            <button onClick={handleLogOut}>Sign Out</button>
                        </div>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;