import React from 'react';
import Footer from "../../../components/layout/InstructorLayout/footer.jsx";
import Header from "../../../components/layout/InstructorLayout/header.jsx";
import Sidebar from '../../../components/ui/SideBar/InstructorSideBar.jsx';
import CoursePreview from "../../../components/ui/Courses/InstructorCourses/ViewCourses/CoursePreview.jsx"
function CoursesPreview() {

    return (
        <>
            <Header />
            <Sidebar />
            <CoursePreview />
            <Footer />
        </>
    );
}


export default CoursesPreview;
