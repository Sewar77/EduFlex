// Components/LessonContent/index.jsx
import React from 'react';
import VideoLesson from './VideoLesson.jsx';
import AssignmentLesson from './AssignmentLesson.jsx';
import TextLesson from './TextLesson.jsx';
import AssignmentSubmission from '../AssignmentSubmission/AssignmentSubmission.jsx';
import QuizLesson from './QiuzLesson.jsx';

const LessonContent = ({ lesson }) => {
    switch (lesson.content_type) {
        case 'video':
            return <VideoLesson src={lesson.content_url} />;

        case 'assignment':
            return (
                <>
                    <AssignmentLesson src={lesson.content_url} />
                    <AssignmentSubmission lessonId={lesson.id} />
                </>
            );
        case 'quiz':
            return <QuizLesson lessonId={lesson.id} />;  // New quiz handler
        case 'text':
        default:
            return <TextLesson content={lesson.description} />;
    }

};

export default LessonContent;
