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
import { DashboardDataProvider } from './context/DashboardDataContext.jsx';
import RecommendedCourses from './pages/Courses/Recommended.jsx';
import MyProfile from './pages/Student/MyProfile.jsx';
import SettingsPage from './pages/Settings/Settings.jsx';
import AboutUs from './pages/Others/About.jsx';
import ContactUs from "./pages/Others/Contact.jsx"
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/course" element={<ViewCoursesPage />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/course/recommended" element={<RecommendedCourses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route
              path="/student/Dashboard"
              element={
                <DashboardDataProvider>
                  <Dashboard />
                </DashboardDataProvider>
              }
            />
            <Route path="/courses/:courseId/modules" element={<CourseModulesPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
