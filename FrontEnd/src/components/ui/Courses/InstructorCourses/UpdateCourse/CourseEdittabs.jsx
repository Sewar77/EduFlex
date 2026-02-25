import React, { useState } from 'react';
import styles from './EditCourse.module.css';
import EditCourseInfo from './EditCourseInfo.jsx';
import EditModules from './EditModuleInfo.jsx';
import EditLessons from './EditLessons.jsx';

const EditCourseTabs = ({ courseId }) => {
    const [activeTab, setActiveTab] = useState('course');

    return (
        <div className={styles.container}>
            <div className={styles.tabNavigation}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'course' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('course')}
                >
                    Course Info
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'modules' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('modules')}
                >
                    Modules
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'lessons' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('lessons')}
                >
                    Lessons
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'course' && <EditCourseInfo courseId={courseId} />}
                {activeTab === 'modules' && <EditModules courseId={courseId} />}
                {activeTab === 'lessons' && <EditLessons courseId={courseId} />}
            </div>
        </div>
    );
};

export default EditCourseTabs;