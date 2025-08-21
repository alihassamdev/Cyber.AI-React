import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import SplitFeatureA from '../components/SplitFeatureA'
import SplitFeatureB from '../components/SplitFeatureB'
import CalloutPanel from '../components/CalloutPanel'

const Home = () => {
    return (
        <>
            <Header />
            <Stats />
            <SplitFeatureA />
            <SplitFeatureB />
            <CalloutPanel />
            <Footer />
        </>

    )
}

export default Home