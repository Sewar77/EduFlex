import React from 'react';
//import styles from './Main.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../components/ui/SideBar/SideBar';
import About from '../../components/ui/Others/About';

function AboutUs() {
    return (
        <>
            <Header />
            <Sidebar />
            <About />
            <Footer />
        </>
    );
}

export default AboutUs;
