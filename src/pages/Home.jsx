import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import SplitFeatureA from '../components/SplitFeatureA'
import SplitFeatureB from '../components/SplitFeatureB'
import CalloutPanel from '../components/CalloutPanel'
import Feature from '../components/Feature'
import MediaText from '../components/MediaText'
import Faq from '../components/Faq'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Stats />
            <SplitFeatureA />
            <SplitFeatureB />
            <CalloutPanel />
            <Feature />
            <MediaText />
            <Faq />
            <Footer />
        </>

    )
}

export default Home