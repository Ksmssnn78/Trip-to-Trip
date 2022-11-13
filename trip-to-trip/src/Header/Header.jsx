import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../resources/Group_204.png';

const Header = () => {
    return (
        <div id='main-body'>
            <div id='logo-div'>
                <Link to="/Home"><img id='logo-pic' src={logo} alt="logo"/></Link> 
            </div>
            <nav id='navlink'>
                <Link className='links' to="/Discover">Discover</Link>
                <Link className='links' to="/Community">Community</Link>
                <Link className='links' to="/SpecialDeal">Special Deal</Link>
                <Link className='links' to="/AboutUs">About Us</Link>
                <Link className='links' to="/SignIn">Sign in</Link>
                <Link className='links' to="/Profile">Profile</Link>
                <Link className='links link-reg' to="/Register">Register</Link>
            </nav>
        </div>
    );
};

export default Header;