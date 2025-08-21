import React from 'react'

import './CalloutPanel.css'

import arrow from '../assets/icons/arrow.png'

const CalloutPanel = () => {
    return (
        <section className="callout-section container ">
            <div className='cyber-callout'>
                <div className="callout-left">
                    <h2>Greetings! Dive into the Cybernetic Universe</h2>
                    <p>
                        Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.
                    </p>
                </div>

                <div className="card callout-right">
                    <ul className="menu">
                        <li>

                            <span className="color-box yellow"></span>
                            <span className="text">Join The Revolution</span>
                            <span className="arrow"><img src={arrow} alt="" /></span>
                        </li>
                        <li>
                            <span className="color-box red"></span>
                            <span className="text">Art And Design</span>
                            <span className="arrow"><img src={arrow} alt="" /></span>

                        </li>
                        <li>
                            <span className="color-box yellow"></span>
                            <span className="text">Tech And Gear</span>
                            <span className="arrow"><img src={arrow} alt="" /></span>
                        </li>
                        <li>
                            <span className="color-box red"></span>
                            <span className="text">Stories And Lore</span>
                            <span className="arrow"><img src={arrow} alt="" /></span>
                        </li>
                    </ul>

                </div>
            </div>
        </section >
    )
}

export default CalloutPanel