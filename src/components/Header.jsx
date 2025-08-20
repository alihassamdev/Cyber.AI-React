import React from 'react'

import './Header.css'

import unionIconYellow from '../assets/icons/Union-yellow.png';
import unionIconRed from '../assets/icons/Union-red.png';

const Header = () => {
    return (
        <header>
            <div className='container header-container'>
                <div><span className='logo gradient-text'>Cyber.AI</span></div>
                <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Pages</a></li>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>
                <div><button className='button button-primary'>Get Started Free</button></div>
            </div>
            <div className='header-bottom'>
                <div className='header-bottom-container'>
                    <img src={unionIconRed} alt="" />
                    <img src={unionIconYellow} alt="" />
                </div>
            </div>

        </header>
    )
}

export default Header