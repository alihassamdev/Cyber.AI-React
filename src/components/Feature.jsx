import React from 'react'

import './Feature.css'

import descoverIcon from '../assets/icons/discover.png'
import exploreIcon from '../assets/icons/explore.png'
import connectIcon from '../assets/icons/connect.png'

const Feature = () => {
    return (
        <section className="container feature-section">
            <div className="feature-header">
                <h1>Dive into the Cybernetic <span className='gradient-text-alt'>Universe</span></h1>
                <p>
                    A realm where advanced technology meets dystopian reality.
                    Our website is your gateway to a universe of neon lights, gritty streets,
                    and cybernetic enhancements.
                </p>
            </div>

            <div className="cyber-features">
                <div className="feature-box">
                    <div className="icon">
                        <img src={descoverIcon} /> </div>
                    <div>
                        <h3>Discover the Future</h3>
                        <p>Explore the high-tech, low-life world where the lines between humanity</p>
                    </div>
                </div>

                <div className="feature-box">
                    <div className="icon">
                        <img src={exploreIcon} /> </div>
                    <div>
                        <h3>Explore Features</h3>
                        <p>Explore the high-tech, low-life world where the lines between humanity</p>
                    </div>
                </div>

                <div className="feature-box">
                    <div className="icon">
                        <img src={connectIcon} />
                    </div>
                    <div>
                        <h3>Stay Connected</h3>
                        <p>Explore the high-tech, low-life world where the lines between humanity</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature