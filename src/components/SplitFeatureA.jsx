import React from 'react'

import "./SplitFeatureA.css"

import splitFeatureImg from '../assets/split-feature-img.png'

const SplitFeatureA = () => {
    return (
        <section className="container split-featureA-section">
            <div className="split-featureA-content">
                <h1>
                    Where <span className="gradient-text">Neon Dreams & Digital</span> Nightmares
                    Converge.
                </h1>

                <p className="split-featureA-description">
                    A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.
                </p>

                <div className="split-featureA-stats">
                    <div className="stat">
                        <h2 className='gradient-text-alt'>89,2K+</h2>
                        <p>Discover the Future</p>
                    </div>
                    <div className="stat">
                        <h2 className='gradient-text-alt'>7001+</h2>
                        <p>Stories and Lore</p>
                    </div>
                    <div className="stat">
                        <h2 className='gradient-text-alt'>3,124+</h2>
                        <p>Art and Design</p>
                    </div>
                </div>
            </div>

            <div className="split-featureA-image">
                <img src={splitFeatureImg} alt="Cyberpunk Robot Image" />
            </div>
        </section>
    )
}

export default SplitFeatureA