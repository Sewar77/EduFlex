import React, { useState } from 'react';
import styles from './SidebarModules.module.css';

function SidebarModules({ modules, onLessonSelect }) {
    const [expandedModuleId, setExpandedModuleId] = useState(null);

    const toggleModule = (id) => {
        if (expandedModuleId === id) {
            setExpandedModuleId(null); // Close if clicked again
        } else {
            setExpandedModuleId(id); // Open the selected module only
        }
    };

    return (
        <aside className={styles.sidebar}>
            <h3>Course Modules</h3>
            <ul className={styles.moduleList}>
                {modules.map((module, index) => {
                    // Attempt to get a unique module ID
                    const moduleId =
                        module.id || module._id || module.module_id || module.course_id || `module-${index}`;

                    console.log('Module ID:', moduleId, 'Title:', module.title);

                    const isExpanded = expandedModuleId === moduleId;

                    return (
                        <li key={moduleId}>
                            <button
                                className={styles.moduleTitle}
                                onClick={() => toggleModule(moduleId)}
                                aria-expanded={isExpanded}
                                aria-controls={`module-lessons-${moduleId}`}
                            >
                                {module.title}
                            </button>
                            {isExpanded && (
                                <ul id={`module-lessons-${moduleId}`} className={styles.lessonList}>
                                    {module.lessons && module.lessons.length > 0 ? (
                                        module.lessons.map((lesson) => {
                                            const lessonId = lesson.id || lesson._id || `lesson-${lesson.title}`;
                                            return (
                                                <li key={lessonId}>
                                                    <button
                                                        className={styles.lessonItem}
                                                        onClick={() => onLessonSelect(lesson)}
                                                    >
                                                        {lesson.title}
                                                    </button>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <li>No lessons found</li>
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default SidebarModules;
