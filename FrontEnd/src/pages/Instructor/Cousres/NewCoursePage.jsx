import React from 'react';
import Footer from "../../../components/layout/InstructorLayout/footer.jsx";
import Header from "../../../components/layout/InstructorLayout/header.jsx";
import Sidebar from '../../../components/ui/SideBar/InstructorSideBar.jsx';
import CourseWizard from "../../../components/ui/Courses/InstructorCourses/CreateCourse/CourseWizard.jsx"
function NewCoursePage() {

    return (
        <>
            <Header />
            <Sidebar />
            <CourseWizard />
            <Footer />
        </>
    );
}


export default NewCoursePage;
