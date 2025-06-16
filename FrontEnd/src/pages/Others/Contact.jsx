import React from 'react';
//import styles from './Main.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../components/ui/SideBar/SideBar';
import Contact from '../../components/ui/Others/Contact';

function ContactUs() {
    return (
        <>
            <Header />
            <Sidebar />
            <Contact />
            <Footer />
        </>
    );
}

export default ContactUs;
