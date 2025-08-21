import React from 'react'

import "./SplitFeatureB.css"

import splitFeatureImg from '../assets/split-feature-img.png'
import cardImg from '../assets/split-featureB-card-Img.png'

const SplitFeatureB = () => {
    return (
        <section className="container split-featureB-section">

            <div className="split-featureB-image">
                <img src={splitFeatureImg} alt="Cyberpunk Robot Image" />
            </div>

            <div className="split-featureB-content">
                <h1>
                    Unveil <span className="gradient-text">the Secrets of the</span> Cybernetic Underworld
                </h1>

                <p className="split-featureB-description">
                    A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
                </p>

                <div className="card split-featureB-card ">
                    <img src={cardImg} alt="Cyberpunk Robot" />
                    <div className="content">
                        <h3>Join the Revolution</h3>
                        <p>Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default SplitFeatureB