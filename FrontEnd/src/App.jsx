import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/auth/RegisterPage';
import Login from './pages/auth/LoginPage';
import Dashboard from './pages/Student/Dashboard';
import MainStudent from './pages/Student/Main';
import './App.css';
import AuthProvider from "./context/AuthProvider";
import ErrorBoundary from './components/ui/errors/ErrorBoundary';
import Home from './pages/Home/Home';
import CourseDetails from './components/ui/Courses/CourseDetails';
import MyCourses from './pages/Student/MyCourses';
import Categories from './pages/Categories/Categories';
import ViewCoursesPage from './pages/Courses/ViewCourses.jsx';
import CourseModulesPage from './pages/Modules/CourseModulesPage.jsx';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/courses" element={<ViewCoursesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student/Dashboard" element={<Dashboard />} />
            <Route path="/student/main" element={<MainStudent />} />
            <Route path="/courses/:courseId/modules" element={<CourseModulesPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
