import React from 'react';
import Footer from "../../../components/layout/InstructorLayout/footer.jsx";
import Header from "../../../components/layout/InstructorLayout/header.jsx";
import Sidebar from '../../../components/ui/SideBar/InstructorSideBar.jsx';
import InstructorCoursesGrid from '../../../components/ui/Courses/InstructorCourses/ViewCourses/InstructorCoursesGrid.jsx';
function ViewCourses() {

    return (
        <>
            <Header />
            <Sidebar />
            <InstructorCoursesGrid />
            <Footer />
        </>
    );
}


export default ViewCourses;
