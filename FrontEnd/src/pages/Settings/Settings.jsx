import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../Components/layout/StudentLayout/Footer.jsx";
import Header from "../../Components/layout/StudentLayout/Header.jsx";
import Sidebar from '../../Components/ui/SideBar/SideBar.jsx';
import Settings from '../../Components/ui/Settings/Settings.jsx';

function SettingsPage() {
    return (
        <>
            <Header />
            <Sidebar />
            <Settings />
            <Footer />
        </>
    );
}

export default SettingsPage;
