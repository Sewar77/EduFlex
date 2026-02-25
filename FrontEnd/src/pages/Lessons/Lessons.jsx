import React from 'react';
import Footer from "../../Components/layout/StudentLayout/Footer.jsx";
import Header from "../../Components/layout/StudentLayout/Header.jsx";
import Sidebar from '../../Components/ui/SideBar/SideBar.jsx';
import LessonPage from '../../Components/ui/Lessons/LessonPage.jsx';

function Lessons() {
    return (
        <>
            <Header />
            <Sidebar />
            <LessonPage />
            <Footer />
        </>
    );
}

export default Lessons;
