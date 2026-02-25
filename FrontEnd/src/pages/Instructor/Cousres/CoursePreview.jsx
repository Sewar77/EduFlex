import React from 'react';
import Footer from "../../../Components/layout/InstructorLayout/footer.jsx";
import Header from "../../../Components/layout/InstructorLayout/header.jsx";
import Sidebar from '../../../Components/ui/SideBar/InstructorSideBar.jsx';
import CoursePreview from "../../../Components/ui/Courses/InstructorCourses/ViewCourses/CoursePreview.jsx"
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
