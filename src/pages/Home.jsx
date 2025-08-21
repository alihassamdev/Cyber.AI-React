import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import SplitFeatureA from '../components/SplitFeatureA'
import SplitFeatureB from '../components/SplitFeatureB'

const Home = () => {
    return (
        <>
            <Header />
            <Stats />
            <SplitFeatureA />
            <SplitFeatureB />
            <Footer />
        </>

    )
}

export default Home