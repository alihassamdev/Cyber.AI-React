import React from 'react'

import "./MediaText.css"

import mediaSectionImg from '../assets/media-section-Img.png'

const MediaText = () => {
    return (
        <section className="container media-text-section">

            <div className="media-text-image">
                <img src={mediaSectionImg} alt="Cyberpunk Robot Image" />
            </div>

            <div className="media-text-content">
                <h1>
                    Your  <span className="gradient-text">Portal to a Gritty,</span>Tech-Driven Future.
                </h1>

                <p className="media-text-description">
                    A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
                </p>
                <div className="button-group">
                    <a href="#" className="btn primary">Read More</a>
                    <a href="#" className="btn secondary">Learn More</a>
                </div>
            </div>

        </section>
    )
}

export default MediaText