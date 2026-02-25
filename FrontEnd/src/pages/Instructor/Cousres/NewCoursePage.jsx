import React from 'react';
import Footer from "../../../Components/layout/InstructorLayout/footer.jsx";
import Header from "../../../Components/layout/InstructorLayout/header.jsx";
import Sidebar from '../../../Components/ui/SideBar/InstructorSideBar.jsx';
import CourseWizard from "../../../Components/ui/Courses/InstructorCourses/CreateCourse/CourseWizard.jsx"
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
