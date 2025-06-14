import React from 'react';
//import styles from './Main.module.css';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import TextRotator from "../../components/ui/TextRotator/TextRotator";
import CourseCards from '../../components/ui/Courses/Courses';
import Sidebar from '../../components/ui/SideBar/SideBar';

function MainStudent() {
    return (
        <>
            <Header />
            {/* <Sidebar /> */}
             <TextRotator />
            <CourseCards />
           <Footer />
        </>
    );
}

export default MainStudent;
