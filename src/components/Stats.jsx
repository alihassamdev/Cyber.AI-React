import React from 'react'

import './Stats.css'

import statImg from '../assets/stat-card-img.png'

const Stats = () => {
    return (
        <section className="stats-section container">
            {/* <!-- Left card with image --> */}
            <div className="card stats-card">
                <img src={statImg} alt="Cyberpunk Robot" />
                <div className="stats-content">
                    <h2 className='gradient-text'>76,285K+</h2>
                    <h3>Experience the Future</h3>
                    <p>Explore the high-tech, low-life world where the lines between</p>
                </div>
            </div>

            {/* <!-- Center text block --> */}
            <div className="text-block">
                <h3>ART AND <span>DESIGN</span></h3>
                <p>Feast your eyes on stunning visuals and concept art that bring the cyberpunk</p>
            </div>

            {/* <!-- Right card with experience years --> */}
            <div className="card experience-card">
                <h2><span className="gradient-text">17+</span></h2>
                <p>Years of <br /> Experiences</p>
            </div>
        </section>
    )
}

export default Stats