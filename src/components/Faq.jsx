import React from 'react'

import './Faq.css'

const Faq = () => {
    return (
        <section className="container faq-section">
            <div className="faq-header">
                <h2>
                    Frequently Asked <span className="gradient-text-alt">Questions</span>
                </h2>
                <p>
                    A realm where advanced technology meets dystopian reality. Our website is your gateway
                    to a universe of neon lights, gritty streets, and cybernetic enhancements.
                </p>
            </div>

            <div className="faq-flex">
                <div className="faq-item">
                    <span className="faq-number gradient-text-alt">01.</span>
                    <div className='faq-QA'>
                        <h3>How do I stay updated on new content and events?</h3>
                        <p>
                            A realm where advanced technology meets dystopian reality. Our website is your gateway,....
                        </p>
                    </div>
                </div>

                <div className="faq-item">
                    <span className="faq-number gradient-text-alt">02.</span>
                    <div className='faq-QA'>
                        <h3>How can I contact customer cyberpunk support?</h3>
                        <p>
                            A realm where advanced technology meets dystopian reality. Our website is your gateway,....
                        </p>
                    </div>
                </div>

                <div className="faq-item">
                    <span className="faq-number gradient-text-alt">03.</span>
                    <div className='faq-QA'>
                        <h3>Can I purchase cyberpunk-themed merchandise?</h3>
                        <p>
                            A realm where advanced technology meets dystopian reality. Our website is your gateway,....
                        </p>
                    </div>
                </div>

                <div className="faq-item">
                    <span className="faq-number gradient-text-alt">04.</span>
                    <div className='faq-QA'>
                        <h3>Are there any rules or guidelines for participating in the community?</h3>
                        <p>
                            A realm where advanced technology meets dystopian reality. Our website is your gateway,....
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq