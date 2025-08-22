import React from 'react'

import './Hero.css'

import heroImg from '../assets/hero-section-char.png'

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-grid">
                <h1 className="hero-wordmark">Cyber Punk</h1>

                <div className="side left">
                    <div className="title-row">
                        <div>
                            <span className="bullet">•</span>
                            <span className="title">Stories & Lore</span>
                        </div>
                        <div className="line"></div>
                    </div>
                    <p className="description">
                        Dive into compelling narratives<br />
                        set in a dystopian future.
                    </p>
                </div>

                <div className="character">
                    <img src={heroImg} alt="Character" />
                </div>

                <div className="side right">
                    <h2>EVENTS AND<br /><span className="strong">UPDATES</span></h2>
                    <p>
                        Explore the high-tech, low-life world where the lines between
                        humanity and machinery blur.
                    </p>
                    <a href="#" className="button button-primary">Read More</a>
                </div>
            </div>
        </section>
    )
}

export default Hero