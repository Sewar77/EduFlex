import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdLibraryBooks, MdPeople, MdSettings, MdExpandMore, MdExpandLess, MdExitToApp, MdMenu, MdClose } from 'react-icons/md';
import { useAuth } from '../../../hooks/Auth/userAuth';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const menuItems = [
        { title: 'Dashboard', icon: <MdDashboard />, path: '/student/Dashboard' },
        {
            title: 'My Courses',
            icon: <MdLibraryBooks />,
            path: '/courses',
            subItems: [
                { title: 'Enrolled', path: '/courses/enrolled' },
                { title: 'Recommended', path: '/courses/recommended' },
                { title: 'Completed', path: '/courses/completed' },
            ],
        },
        { title: 'Community', icon: <MdPeople />, path: '/community' },
        { title: 'Settings', icon: <MdSettings />, path: '/settings' },
    ];

    const toggleSubmenu = (title) => {
        setOpenSubmenu(openSubmenu === title ? null : title);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <MdClose /> : <MdMenu />}
            </button>

            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.profile}>
                    <div className={styles.avatar}>{user?.name?.charAt(0).toUpperCase() || 'U'}</div>
                    <div>
                        <h3>{user?.name || 'User'}</h3>
                        <p>{user?.role || 'Student'}</p>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        {menuItems.map(({ title, icon, path, subItems }) => (
                            <li key={title}>
                                <div
                                    className={`${styles.menuItem} ${isActive(path) ? styles.active : ''}`}
                                    onClick={() => (subItems ? toggleSubmenu(title) : setIsOpen(false))}
                                >
                                    <Link to={path} className={styles.link} onClick={() => !subItems && setIsOpen(false)}>
                                        <span className={styles.icon}>{icon}</span>
                                        <span>{title}</span>
                                    </Link>
                                    {subItems && (
                                        <button
                                            onClick={() => toggleSubmenu(title)}
                                            className={styles.expandBtn}
                                            aria-label="Toggle submenu"
                                        >
                                            {openSubmenu === title ? <MdExpandLess /> : <MdExpandMore />}
                                        </button>
                                    )}
                                </div>

                                {subItems && openSubmenu === title && (
                                    <ul className={styles.subMenu}>
                                        {subItems.map(({ title: subTitle, path: subPath }) => (
                                            <li key={subTitle}>
                                                <Link
                                                    to={subPath}
                                                    className={`${styles.subMenuItem} ${isActive(subPath) ? styles.activeSub : ''}`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subTitle}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className={styles.logout} onClick={() => { logout(); setIsOpen(false); }}>
                    <MdExitToApp />
                    <span>Logout</span>
                </button>
            </aside>
        </>
    );
};

export default Sidebar;
