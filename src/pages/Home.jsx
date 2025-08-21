import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import SplitFeatureA from '../components/SplitFeatureA'
import SplitFeatureB from '../components/SplitFeatureB'
import CalloutPanel from '../components/CalloutPanel'
import Feature from '../components/Feature'

const Home = () => {
    return (
        <>
            <Header />
            <Stats />
            <SplitFeatureA />
            <SplitFeatureB />
            <CalloutPanel />
            <Feature />
            <Footer />
        </>

    )
}

export default Home