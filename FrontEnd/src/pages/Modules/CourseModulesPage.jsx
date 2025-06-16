import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SidebarModules from '../../components/ui/Modules/SidebarModules';
import styles from './CourseModules.module.css';

function CourseModulesPage() {
    const { courseId } = useParams();
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const response = await fetch(`/api/courses/${courseId}/modules`, {
                    withCredentials: true,
                });

                const modulesData = response?.data?.data;
                if (Array.isArray(modulesData)) {
                    setModules(modulesData);
                } else {
                    throw new Error('Unexpected modules format');
                }
            } catch (err) {
                setError(err.message || 'Error fetching modules');
            } finally {
                setLoading(false);
            }
        };

        fetchModules();
    }, [courseId]);

    const handleLessonSelect = (lesson) => {
        setSelectedLesson(lesson);
    };

    return (
        <>
            <Header />
            <div className={styles.pageLayout}>
                <SidebarModules
                    modules={modules?.filter((m) => m && m.id)}
                    onLessonSelect={handleLessonSelect}
                />
                <main className={styles.mainContent}>
                    {loading && <p>Loading modules...</p>}
                    {error && <p className={styles.error}>{error}</p>}
                    {!loading && !error && !selectedLesson && (
                        <p>Please select a lesson.</p>
                    )}
                    {selectedLesson && (
                        <div className={styles.lessonDetail}>
                            <h2>{selectedLesson.title}</h2>
                            <p>
                                Lesson content for: {selectedLesson.title}{' '}
                                (ID: {selectedLesson.id})
                            </p>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default CourseModulesPage;
