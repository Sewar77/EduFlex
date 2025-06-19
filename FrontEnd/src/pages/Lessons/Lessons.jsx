import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../components/ui/SideBar/SideBar';
import LessonPage from '../../components/ui/Lessons/LessonPage';

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
