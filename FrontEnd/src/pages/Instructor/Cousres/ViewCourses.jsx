import React from 'react';
import Footer from "../../../Components/layout/InstructorLayout/footer.jsx";
import Header from "../../../Components/layout/InstructorLayout/header.jsx";
import Sidebar from '../../../Components/ui/SideBar/InstructorSideBar.jsx';
import InstructorCoursesGrid from '../../../Components/ui/Courses/InstructorCourses/ViewCourses/InstructorCoursesGrid.jsx';
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
