import React from "react";
import styles from "./InstructorDashboard.module.css";
import Footer from "../../components/layout/InstructorLayout/footer.jsx";
import Header from "../../components/layout/InstructorLayout/header.jsx";
import Sidebar from "../../components/ui/SideBar/InstructorSideBar.jsx";
import { useAuth } from "../../hooks/Auth/userAuth.js";
import QuoteOfTheDay from "../../components/ui/QuoteOfTheDay/QuoteOfTheDay.jsx";
import SimpleTodo from "../../components/ui/SimpleTodo/SimpleTodo.jsx";
import ViewCategories from "../../components/ui/Categories/ViewCategories.jsx";
import EnrollmentReports from "../../components/ui/Courses/InstructorCourses/AnalsysCourses/ProgressChart.jsx";

const InstructorDashboard = () => {
    const { user } = useAuth();

    return (
        <>
            <Header />
            <Sidebar />
            <div className={styles.dashboard}>
                <header className={styles.header}>
                    <h1>Welcome {user?.name || user?.role || "again"} 🎓</h1>
                    <p>Here’s your teaching space.</p>
                </header>
                <QuoteOfTheDay />
                <EnrollmentReports />
                <ViewCategories />
                <SimpleTodo />
            </div>
            <Footer />
        </>
    );
}

export default InstructorDashboard;
