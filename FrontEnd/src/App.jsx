import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/RegisterPage';
import Login from './pages/auth/LoginPage';
import Dashboard from './pages/Student/Dashboard';
import MainStudent from './pages/Student/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<MainStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;