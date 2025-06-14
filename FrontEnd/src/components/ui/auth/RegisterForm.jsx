import React, { useState } from 'react';
import styles from './Register.module.css';
import emailIcon from '../../../assets/images/email.png';
import passwordIcon from '../../../assets/images/password.png';
import userIcon from '../../../assets/images/person.png';
import logo from "../../../assets/images/eduflex.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../hooks/Auth/userAuth';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            await register({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            navigate('/student/Dashboard');
        } catch (err) {
            setError(err.message || 'Registration failed');
        } finally {
            setIsLoading(false);
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
                        />
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <button
                        type="submit"
                        className={styles.registerButton}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating account...' : 'Sign Up'}
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