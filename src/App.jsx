import React from 'react';
import './App.css';

// components
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { AboutUs } from './components/AboutUs/AboutUs';
import { SpecialMenu } from './components/Menu/SpecialMenu';
import { Chef } from './components/Chef/Chef';
import { Intro } from './components/Intro/Intro';
import { Laurels } from './components/Laurels/Laurels';
import { Gallery } from './components/Gallary/Gallery';
import { FindUs } from './components/FindUs/FindUs';
import { Footer } from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <NavBar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </>
    );
};

export default App;
