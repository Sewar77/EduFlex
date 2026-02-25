import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../components/layout/StudentLayout/footer.jsx";
import Header from "../../components/layout/StudentLayout/header.jsx";
import Sidebar from '../../components/ui/SideBar/SideBar.jsx';
import About from '../../components/ui/Others/About.jsx';

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
