import React from 'react';
import './Nav.scss';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <header>
            <nav>
                <Menu className="menu">
                    <li><Link to="/" className="menu-item">Home</Link></li>
                    <li><Link to="/list" className="menu-item">Your List</Link></li>
                    {/*<li><a className="menu-item" href="#">Location</a></li>*/}
                    <li><Link to="/about" className="menu-item">About</Link></li>
                </Menu>
            </nav>
            <div className="logo">
                <i className="fa fa-paw" aria-hidden="true"/>
                <span>TinDog</span>
            </div>
        </header>
    );
};

// podpiąć routing pod a

export default Nav;
