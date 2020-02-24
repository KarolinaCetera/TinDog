import React from 'react';
import './Nav.scss';
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {

    return (
        <header>
            <nav>
                <Menu
                    className="menu">
                    <a className="menu-item" href="#">Home</a>
                    <a className="menu-item" href="#">Your List</a>
                    <a className="menu-item" href="#">Location</a>
                    <a className="menu-item" href="#">About</a>
                </Menu>
            </nav>
            <div className="logo">
                <i className="fa fa-paw" aria-hidden="true"></i>
                <span>TinDog</span>
            </div>
        </header>
    );
};

// podpiąć routing pod a

export default Nav;
