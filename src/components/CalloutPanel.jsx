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
                    <ul class="menu">
                        <li>

                            <span class="color-box yellow"></span>
                            <span class="text">Join The Revolution</span>
                            <span class="arrow"><img src={arrow} alt="" /></span>
                        </li>
                        <li>
                            <span class="color-box red"></span>
                            <span class="text">Art And Design</span>
                            <span class="arrow"><img src={arrow} alt="" /></span>

                        </li>
                        <li>
                            <span class="color-box yellow"></span>
                            <span class="text">Tech And Gear</span>
                            <span class="arrow"><img src={arrow} alt="" /></span>
                        </li>
                        <li>
                            <span class="color-box red"></span>
                            <span class="text">Stories And Lore</span>
                            <span class="arrow"><img src={arrow} alt="" /></span>
                        </li>
                    </ul>

                </div>
            </div>
        </section >
    )
}

export default CalloutPanel