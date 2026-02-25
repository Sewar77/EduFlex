import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../Components/layout/StudentLayout/Footer.jsx";
import Header from "../../Components/layout/StudentLayout/Header.jsx";
import Sidebar from '../../Components/ui/SideBar/SideBar.jsx';
import About from '../../Components/ui/Others/About.jsx';

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
