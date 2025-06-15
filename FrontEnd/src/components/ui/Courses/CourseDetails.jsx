import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import style from "./CourseDetails.module.css";
import fallbackImage from "../../../assets/images/card1.jpg";
import EnrollButton from "../enrollments/EnrollButton";

function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/course/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Course not found");
                }
                return res.json();
            })
            .then((data) => {
                setCourse(data.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);
   

    return (
        <>
            <Header />
            <div className={style.container}>
                {loading && <p className={style.status}>Loading...</p>}
                {error && <p className={style.status}>Error: {error}</p>}

                {course && (
                    <div className={style.detailsCard}>
                        <img
                            src={course.thumbnail_url || fallbackImage}
                            alt={course.title}
                            className={style.image}
                            onError={(e) => (e.target.src = fallbackImage)}
                        />
                        <div className={style.info}>
                            <h2 className={style.title}>{course.title}</h2>
                            <p className={style.description}>{course.description}</p>
                            <p><strong>Instructor:</strong> {course.instructor_name || "Unknown"}</p>
                            <p><strong>Category:</strong> {course.category_name || "Uncategorized"}</p>
                            <p><strong>Level:</strong> {course.level || "All levels"}</p>

                                <EnrollButton courseId={course.id} />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default CourseDetails;
