import React from 'react';
import Footer from "../../components/layout/StudentLayout/footer.jsx";
import Header from "../../components/layout/StudentLayout/header.jsx";
import Sidebar from '../../components/ui/SideBar/SideBar.jsx';
import LessonPage from '../../components/ui/Lessons/LessonPage.jsx';

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
