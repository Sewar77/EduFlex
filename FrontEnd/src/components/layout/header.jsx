import React from "react";
import style from "./header.module.css";
import logo from "../../../src/assets/images/eduflex.png";
import {useAuth} from "../../hooks/Auth/userAuth.js"
import { Link } from "react-router-dom";
import CourseSearch from "../ui/Courses/CourseSearch";

function Header() {
    const { user } = useAuth();
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.rightHeader}>
                    <img
                        className={style.img}
                        src={user?.avatar || logo}
                        alt="Eduflex Logo"
                    />
                    <CourseSearch />  

                </div>
                <div className={style.leftHeader}>
                    <Link to="/student/main">Home</Link>
                    <Link to="/my-courses">My Courses</Link>
                    <Link to="/course">Explore new Courses</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/notifications">Notifications</Link>
                    <Link to="/logout">Logout</Link>
                    <Link to="/profile">
                        <img
                            src="https://i.pravatar.cc/80?img=21"
                            className={style.person}
                            alt="Profile of student"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
