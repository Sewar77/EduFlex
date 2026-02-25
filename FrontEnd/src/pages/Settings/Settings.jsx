import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../components/layout/StudentLayout/footer.jsx";
import Header from "../../components/layout/StudentLayout/header.jsx";
import Sidebar from '../../components/ui/SideBar/SideBar.jsx';
import Settings from '../../components/ui/Settings/Settings.jsx';

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
