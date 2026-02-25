import React from 'react';
//import styles from './Main.module.css';
import Footer from "../../Components/layout/StudentLayout/footer.jsx";
import Header from "../../Components/layout/StudentLayout/header.jsx";
import TextRotator from "../../Components/ui/TextRotator/TextRotator.jsx";
import CourseCards from '../../Components/ui/Courses/StudentCourse/ViewCourses.jsx';
import Sidebar from '../../Components/ui/SideBar/SideBar.jsx';

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
