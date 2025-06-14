import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/auth/RegisterPage';
import Login from './pages/auth/LoginPage';
import Dashboard from './pages/Student/Dashboard';
import MainStudent from './pages/Student/Main';
import './App.css';
import AuthProvider from "./context/AuthProvider";
import ErrorBoundary from './components/ui/errors/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/student/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<MainStudent />} />
            {/* Redirect to home if no route matches */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
