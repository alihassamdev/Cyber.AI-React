import React, { useEffect, useState } from 'react'

import './Header.css'

import unionIconYellow from '../assets/icons/Union-yellow.png';
import unionIconRed from '../assets/icons/Union-red.png';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    return (
        <header>
            <div className="container header-container">
                <div className="logo-box">
                    <span className="logo gradient-text">Cyber.AI</span>
                </div>

                <nav className="desktop-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="desktop-cta">
                    <button className="button button-primary">Get Started Free</button>
                </div>

                {/* Toggle Button for Mobile */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu}> ✖</button>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="button button-primary">Get Started Free</button>
            </div>

            <div className="header-bottom">
                <div className="header-bottom-container">
                    <img src={unionIconRed} alt="" />
                    <img src={unionIconYellow} alt="" />
                </div>
            </div>
        </header>

    )
}

export default Header