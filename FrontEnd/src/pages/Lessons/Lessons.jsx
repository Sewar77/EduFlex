import React from 'react';
import Footer from "../../Components/layout/StudentLayout/footer.jsx";
import Header from "../../Components/layout/StudentLayout/header.jsx";
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
