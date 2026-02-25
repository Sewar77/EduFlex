import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../components/layout/StudentLayout/footer.jsx";
import Header from "../../components/layout/StudentLayout/header.jsx";
import Sidebar from '../../components/ui/SideBar/SideBar.jsx';
import Contact from '../../components/ui/Others/Contact.jsx';

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
