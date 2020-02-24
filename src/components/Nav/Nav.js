import React, {useState} from 'react';
import './Nav.scss';

const Nav = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleShowMenu = () => {
        setMenuVisible(true);
    };

    const handleHideMenu = () => {
        setMenuVisible(false);
    };

    return (
        <>
            <header>
                <div className="burger">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={handleShowMenu}
                    />
                </div>
                <div className="logo">
                    Logo
                </div>
            </header>
            <nav className={!menuVisible ? "hidden" : null}>
                <i
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={handleHideMenu}
                />
                <ul className="nav__list">
                    <li className="nav__list__item">Home</li>
                    <li className="nav__list__item">Your list</li>
                    <li className="nav__list__item">Location</li>
                    <li className="nav__list__item">About</li>
                </ul>
            </nav>
        </>
    );
};

// podpiąć routing pod li

export default Nav;
