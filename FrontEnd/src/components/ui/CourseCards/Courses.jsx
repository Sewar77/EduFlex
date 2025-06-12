import { useEffect, useState } from "react";
import style from "./Courses.module.css";
import card from "../../../assets/images/card1.jpg"
function CourseCards() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Error fetching courses:", err));
    }, []);

    return (
        <div className={style.cards_container}>
            {courses.map((course) => (
                <div className={style.card} key={course.id}>
                    <img src={card} alt={course.title} className={style.logo} />
                    <div>
                        <h3>{course.title}</h3>
                        <p><strong>Instructor:</strong> {course.instructor_name}</p>
                        <p><strong>Price:</strong> ${course.price}</p>
                        <p><strong>Rating:</strong> ⭐ {course.rating || "N/A"}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default CourseCards;
