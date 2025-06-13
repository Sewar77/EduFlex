import React from 'react';

import styles from './Dashboard.module.css';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import TextRotator from '../../components/ui/TextRotator/TextRotator';
import EnrolledCourses from '../../components/ui/enrollments/EnrolledCourse';

function Dashboard() {
    return (
        <>
            <Header />
            <TextRotator />
            <div className={styles.dashboard}>
                <header className={styles.header}>
                    <h1>Welcome, Student 🎓</h1>
                    <p>Here’s your learning space.</p>
                </header>

                <div className={styles.content}>
                    <div className={styles.card}>
                        <h2>📚 Enrolled Courses</h2>
                        <p>3 Active Courses</p>
                    </div>
                    <div className={styles.card}>
                        <h2>🧠 Your Progress</h2>
                        <p>75% Average Completion</p>
                    </div>
                    <div className={styles.card}>
                        <h2>🔔 Notifications</h2>
                        <p>No new alerts</p>
                    </div>
                </div>

                {/* <EnrolledCourses /> */}
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
