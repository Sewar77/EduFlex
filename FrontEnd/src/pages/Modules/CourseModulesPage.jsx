// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Footer from "../../components/layout/StudentLayout/footer.jsx";
import Header from "../../components/layout/StudentLayout/header.jsx";
import CourseModulesPage from '../../components/ui/Modules/CourseModulesPage.jsx';

export default function CourseModulePage() {
    return (<>
        <Header />

        <CourseModulesPage />
        <Footer />

    </>)

}