import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../Components/layout/StudentLayout/footer.jsx";
import Header from "../../Components/layout/StudentLayout/header.jsx";
import Sidebar from '../../Components/ui/SideBar/SideBar.jsx';
import Contact from '../../Components/ui/Others/Contact.jsx';

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
