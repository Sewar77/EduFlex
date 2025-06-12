import React, { useState } from 'react';
import styles from './Register.module.css'; // We'll create this
import emailIcon from '../../../assets/images/email.png';
import passwordIcon from '../../../assets/images/password.png';
import userIcon from '../../../assets/images/person.png'; // Add this icon
import logo from "../../../assets/images/eduflex.png";
import { Link } from "react-router-dom";
import api from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            const response = await api.post('/auth/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            // Optional: Auto-login after registration
            localStorage.setItem('token', response.data.token);
            navigate('/');

        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.glassCard}>
                <div className={styles.header}>
                    <img src={logo} alt="Company Logo" className={styles.logo} />
                    <h1 className={styles.title}>Create Account</h1>
                    <p className={styles.subtitle}>Join us to get started</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <img src={userIcon} alt="User" className={styles.inputIcon} />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <img src={emailIcon} alt="Email" className={styles.inputIcon} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <img src={passwordIcon} alt="Password" className={styles.inputIcon} />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className={styles.inputField}
                            required
                            minLength="6"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <img src={passwordIcon} alt="Password" className={styles.inputIcon} />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className={styles.inputField}
                            required
                        />
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <button type="submit" className={styles.registerButton}>
                        Sign Up
                    </button>

                    <div className={styles.socialLogin}>
                        <p className={styles.divider}>Or sign up with</p>
                        <div className={styles.socialButtons}>
                            <button type="button" className={styles.googleButton}>
                                Google
                            </button>
                        </div>
                    </div>

                    <p className={styles.loginLink}>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;