import React from 'react';
//import styles from './Main.module.css';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import TextRotator from "../../components/ui/TextRotator/TextRotator";
import CourseCards from '../../components/ui/Courses/Courses';

function MainStudent() {
    return (
        <>
            <Header />
             <TextRotator />
            <CourseCards />
           <Footer />
        </>
    );
}

export default MainStudent;
