// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Footer from "../../Components/layout/StudentLayout/Footer.jsx";
import Header from "../../Components/layout/StudentLayout/Header.jsx";
import CourseModulesPage from '../../Components/ui/Modules/CourseModulesPage.jsx';

export default function CourseModulePage() {
    return (<>
        <Header />

        <CourseModulesPage />
        <Footer />

    </>)

}