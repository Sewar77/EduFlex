import React from 'react';
//import styles from './Main.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import TextRotator from "../../components/ui/TextRotator/TextRotator";
import CourseCards from '../../components/ui/Courses/ViewCourses';
import Sidebar from '../../components/ui/SideBar/SideBar';
import Settings from '../../components/ui/Settings/Settings';

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
