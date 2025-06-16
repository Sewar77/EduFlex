import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        avatar: "",
    });
    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });
    const [updateStatus, setUpdateStatus] = useState(null);
    const [passwordStatus, setPasswordStatus] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            try {
                setLoading(true);
                const res = await fetch("/api/profile", { credentials: "include" });
                if (!res.ok) throw new Error("Failed to fetch profile");
                const data = await res.json();
                setUser(data);
                setFormData({
                    name: data.name || "",
                    email: data.email || "",
                    avatar: data.avatar || "",
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProfile();
    }, []);

    function handleChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handlePasswordChange(e) {
        setPasswordData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleProfileUpdate(e) {
        e.preventDefault();
        setUpdateStatus(null);
        setError(null);
        try {
            const res = await fetch("/api/profile", {
                method: "PUT",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Failed to update profile");
            const data = await res.json();
            setUser(data);
            setUpdateStatus("Profile updated successfully.");
        } catch (err) {
            setError(err.message);
        }
    }

    async function handlePasswordUpdate(e) {
        e.preventDefault();
        setPasswordStatus(null);
        setError(null);

        if (passwordData.newPassword !== passwordData.confirmNewPassword) {
            setPasswordStatus("New passwords do not match.");
            return;
        }

        try {
            // Assuming your backend expects oldPassword and newPassword fields
            const res = await fetch("/api/user/change-password", {
                method: "PUT",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentPassword: passwordData.oldPassword,
                    newPassword: passwordData.newPassword,
                }),

            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Password change failed");
            }
            setPasswordStatus("Password changed successfully.");
            setPasswordData({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
        } catch (err) {
            setPasswordStatus(err.message);
        }
    }

    if (loading) return <div className={styles.loading}>Loading profile...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;
    if (!user) return null;

    return (
        <div className={styles.profileContainer}>
            <h1>User Profile</h1>

            <section className={styles.basicInfo}>
                <img
                    src={user.avatar || "https://i.pravatar.cc/150?u=" + user.email}
                    alt="User Avatar"
                    className={styles.avatar}
                />
                <form onSubmit={handleProfileUpdate} className={styles.profileForm}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Avatar URL
                        <input
                            type="url"
                            name="avatar"
                            value={formData.avatar}
                            onChange={handleChange}
                            placeholder="https://example.com/avatar.jpg"
                        />
                    </label>
                    <button type="submit" className={styles.updateBtn}>Update Profile</button>
                    {updateStatus && <p className={styles.success}>{updateStatus}</p>}
                </form>
            </section>

            <section className={styles.enrolledCourses}>
                <h2>Enrolled Courses</h2>
                {(user.enrolledCourses ?? []).length === 0 ? (
                    <p>You are not enrolled in any courses.</p>
                ) : (
                    <ul className={styles.courseList}>
                        {user.enrolledCourses.map((course) => (
                            <li key={course.id} className={styles.courseItem}>
                                <img
                                    src={course.thumbnail_url || "/default-course.jpg"}
                                    alt={course.title}
                                    className={styles.courseThumbnail}
                                />
                                <div className={styles.courseDetails}>
                                    <h3>{course.title}</h3>
                                    <p>Instructor: {course.instructor_name}</p>
                                    <p>Enrolled on: {new Date(course.enrollment_date).toLocaleDateString()}</p>
                                    <progress value={course.progress} max="100" />
                                    <span>{course.progress}% Complete</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>


            <section className={styles.passwordSection}>
                <h2>Change Password</h2>
                <form onSubmit={handlePasswordUpdate} className={styles.passwordForm}>
                    <label>
                        Current Password
                        <input
                            type="password"
                            name="oldPassword"
                            value={passwordData.oldPassword}
                            onChange={handlePasswordChange}
                            required
                        />
                    </label>
                    <label>
                        New Password
                        <input
                            type="password"
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            required
                            minLength={6}
                        />
                    </label>
                    <label>
                        Confirm New Password
                        <input
                            type="password"
                            name="confirmNewPassword"
                            value={passwordData.confirmNewPassword}
                            onChange={handlePasswordChange}
                            required
                            minLength={6}
                        />
                    </label>
                    <button type="submit" className={styles.updateBtn}>Change Password</button>
                    {passwordStatus && <p className={passwordStatus.includes("success") ? styles.success : styles.error}>{passwordStatus}</p>}
                </form>
            </section>
        </div>
    );
}

export default UserProfile;
