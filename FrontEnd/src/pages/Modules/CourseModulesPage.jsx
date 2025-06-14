import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SidebarModules from '../../components/ui/Modules/SidebarModules';
import api from '../../services/api';
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
                const response = await api.get(`/courses/${courseId}/modules`, {
                    withCredentials: true,
                });

                if (Array.isArray(response.data.data)) {
                    setModules(response.data.data);
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
                <SidebarModules modules={modules} onLessonSelect={handleLessonSelect} />
                <main className={styles.mainContent}>
                    {loading && <p>Loading modules...</p>}
                    {error && <p className={styles.error}>{error}</p>}
                    {!loading && !error && !selectedLesson && <p>Please select a lesson.</p>}
                    {selectedLesson && (
                        <div>
                            <h2>{selectedLesson.title}</h2>
                            {/* You can expand here to show lesson content */}
                            <p>Lesson content for: {selectedLesson.title} (id: {selectedLesson.id})</p>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default CourseModulesPage;
