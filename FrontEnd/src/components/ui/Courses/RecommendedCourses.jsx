import React, { useEffect, useState } from 'react';
import './Recommended.css'; // Create this for styling

function Recommended() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch('/course/recommended', { withCredentials: true });
                setCourses(res.data.courses || []);
            } catch (err) {
                console.error("Failed to fetch recommended courses", err);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    if (loading) return <p className="loading">Loading recommended courses...</p>;

    return (
        <div className="recommended-container">
            <h2 className="recommended-title">🎯 Recommended For You</h2>
            <div className="recommended-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={course.image} alt={course.title} />
                        <h3>{course.title}</h3>
                        <p>{course.description?.slice(0, 80)}...</p>
                        <a href={`/courses/${course.id}`} className="btn-view">View Course</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommended;
