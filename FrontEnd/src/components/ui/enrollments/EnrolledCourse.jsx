import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import styles from './styles/EnrollCourse.module.css';

function EnrolledCourses() {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = document.cookie.includes("accessToken"); // or your real cookie name
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        const fetchEnrolledCourses = async () => {
            try {
                const response = await api.get("/api/enrollments/my-courses", {
                    withCredentials: true,
                });
                const rawData = response?.data?.result;
                console.log("Enrollments raw data:", rawData);
                if (!Array.isArray(rawData)) throw new Error("Invalid API response structure");

                const validatedData = rawData.map(item => ({
                    course: {
                        _id: item.course.id,
                        title: item.course.title,
                        thumbnail: item.course.thumbnail_url || "/default-course.jpg",
                        instructor: { name: item.course.instructor_name }
                    },
                    enrollmentDate: item.enrollment_date,
                    progress: item.progress,
                }));

                setEnrollments(validatedData);

            } catch (err) {
                console.error("Enrollment fetch failed:", err.message);
                if (err.response?.status === 401) {
                    navigate('/login');
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchEnrolledCourses();
    }, [navigate]);
    
    

    const handleCourseClick = (courseId) => {
        navigate(`/courses/${courseId}`);
    };

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.container}>
            <h2>My Enrolled Courses</h2>

            {enrollments.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>No enrolled courses found</p>
                    <button onClick={() => navigate('/courses')}>
                        Browse Courses
                    </button>
                </div>
            ) : (
                <div className={styles.coursesGrid}>
                    {enrollments.map((enrollment) => (
                        <div
                            key={enrollment.course._id}
                            className={styles.courseCard}
                            onClick={() => handleCourseClick(enrollment.course._id)}
                        >
                            {/* <div className={styles.courseImage}>
                                <img
                                    src={enrollment.course.thumbnail}
                                    alt={enrollment.course.title}
                                    onError={(e) => {
                                        e.target.src = '/default-course.jpg';
                                        e.target.onerror = null;
                                    }}
                                    loading="lazy"
                                />
                            </div> */}
                            <div className={styles.courseInfo}>
                                <h3>{enrollment.course.title}</h3>
                                <p>{enrollment.course.instructor?.name || "Unknown Instructor"}</p>
                                <div className={styles.progressBar}>
                                    <div
                                        style={{ width: `${enrollment.progress}%` }}
                                        aria-label={`${enrollment.progress}% complete`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default EnrolledCourses;