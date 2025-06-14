import React from "react";
import style from "./header.module.css";
import logo from "../../../src/assets/images/eduflex.png";
// import person from "../../../src/assets/images/person.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.rightHeader}>
                    <img className={style.img} src={logo} alt="Eduflex Logo" />
                    <input
                        type="search"
                        placeholder="🔍 Search courses..."
                        className={style.searchCours}
                    />
                </div>
                <div className={style.leftHeader}>
                    <Link to="/student/main">Home</Link>
                    <Link to="/my-courses">My Courses</Link>
                    <Link to="/courses">Explore new Courses</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/notifications">Notifications</Link>
                    <Link to="/logout">Logout</Link>
                    <img
                        src="https://i.pravatar.cc/80?img=21"
                        className={style.person}
                        alt="Profile of student"
                    />
                </div>
            </nav>
        </header>
    );
}

export default Header;
