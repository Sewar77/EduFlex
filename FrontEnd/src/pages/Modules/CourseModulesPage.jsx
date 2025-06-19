// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CourseModulesPage from '../../components/ui/Modules/CourseModulesPage';

export default function CourseModulePage(){
    return (<>
                    <Header />

        <CourseModulesPage/>
                    <Footer />

    </>)

}