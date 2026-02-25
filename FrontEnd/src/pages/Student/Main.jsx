import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../components/layout/StudentLayout/footer.jsx";
import Header from "../../components/layout/StudentLayout/header.jsx";
import TextRotator from "../../components/ui/TextRotator/TextRotator.jsx";
import CourseCards from '../../components/ui/Courses/StudentCourse/ViewCourses.jsx';
import Sidebar from '../../components/ui/SideBar/SideBar.jsx';

function MainStudent() {
    return (
        <>
            <Header />
            <Sidebar />
            <TextRotator />
            <CourseCards />
            <Footer />
        </>
    );
}

export default MainStudent;
