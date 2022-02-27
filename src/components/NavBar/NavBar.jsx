import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Images } from '../../constants/images';
import './NavBar.scss';

export const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar__logo">
                <img src={Images.gericht} alt="" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__navbar-opensans">
                    <a href="#home">Home</a>
                </li>
                <li className="p__navbar-opensans">
                    <a href="#about">About</a>
                </li>
                <li className="p__navbar-opensans">
                    <a href="#menu">Menu</a>
                </li>
                <li className="p__navbar-opensans">
                    <a href="#awards">Awards</a>
                </li>
                <li className="p__navbar-opensans">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">
                    Login / Register
                </a>
                <span></span>
                <a href="/" className="p__opensans">
                    Book Table
                </a>
            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={() => {
                        setToggleMenu(true);
                    }}
                />

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        />
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__navbar-opensans">
                                <a href="#home">Home</a>
                            </li>
                            <li className="p__navbar-opensans">
                                <a href="#about">About</a>
                            </li>
                            <li className="p__navbar-opensans">
                                <a href="#menu">Menu</a>
                            </li>
                            <li className="p__navbar-opensans">
                                <a href="#awards">Awards</a>
                            </li>
                            <li className="p__navbar-opensans">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};
