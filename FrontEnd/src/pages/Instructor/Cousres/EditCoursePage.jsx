import React from 'react';
import { useParams } from 'react-router-dom';
import EditCourseTabs from '../../../components/ui/Courses/InstructorCourses/UpdateCourse/CourseEdittabs.jsx';
import Header from '../../../components/layout/InstructorLayout/header.ksx';
import Footer from '../../../components/layout/InstructorLayout/footer.jsx';

const EditCoursePage = () => {
    const { courseId } = useParams();

    return (
        <>
            <Header />
            <EditCourseTabs courseId={courseId} />
            <Footer />
        </>)
};

export default EditCoursePage;
