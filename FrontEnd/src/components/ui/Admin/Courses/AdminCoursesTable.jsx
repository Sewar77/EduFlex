import React, { useEffect, useState } from "react";
import styles from "./AdminCoursesTable.module.css";

const AdminCoursesTable = () => {
    const [courses, setCourses] = useState([]);
    const [_loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/course")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setCourses(data.data); // ✅ <-- fix is here
                } else {
                    console.error("Unexpected data format:", data);
                    setCourses([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching courses:", err);
                setLoading(false);
            });
    }, []);


    return (
        <div className={styles.container}>
            <h2>All Courses</h2>

            <div className={styles.tableWrapper}> {/* ✅ Add this wrapper */}
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Instructor</th>
                            <th>Category</th>
                            <th>Published</th>
                            <th>Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={course.id}>
                                <td>{index + 1}</td>
                                <td>{course.title}</td>
                                <td>{course.description}</td>
                                <td>{course.instructor_name || "Unknown"}</td>
                                <td>{course.category_name || "Uncategorized"}</td>
                                <td>{course.is_published ? "✅" : "❌"}</td>
                                <td>{course.is_approved ? "✅" : "❌"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> {/* ✅ Close the wrapper */}
        </div>

    );
};

export default AdminCoursesTable;
