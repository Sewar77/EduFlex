import React from 'react';
import styles from './Login.module.css';
import emailIcon from '../../../assets/images/email.png';
import passwordIcon from '../../../assets/images/password.png';
import logo from "../../../assets/images/eduflex.png"
import { Link } from "react-router-dom";
import { useState } from 'react';
import api from '../../../api/axios'; // Import your Axios instance
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // For displaying errors
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Send request to backend
            const response = await api.post('/auth/login', { email, password });

            // Store the token (for future authenticated requests)
            localStorage.setItem('token', response.data.token);

            // Redirect to dashboard/home
            navigate('/student/Dashboard');
        } catch (err) {
            // Handle errors (e.g., wrong credentials)
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    // Add error display in your JSX:
    return (
        <div className={styles.loginContainer} style={{ backgroundImage: `url()` }}>
            <div className={styles.glassCard}>
                <div className={styles.header}>
                    <img src={logo} alt="Company Logo" className={styles.logo} />
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p className={styles.subtitle}>Please enter your credentials</p>
                </div>

                <form className={styles.form} onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <img src={emailIcon} alt="Email" className={styles.inputIcon} />
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <img src={passwordIcon} alt="Password" className={styles.inputIcon} />
                        <input
                            type="password"
                            name='password'
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.options}>
                        <label className={styles.rememberMe}>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className={styles.forgotPassword}>Forgot password?</a>
                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                    <button type="submit" className={styles.loginButton}>
                        Sign In
                    </button>

                    <div className={styles.socialLogin}>
                        <p className={styles.divider}>Or continue with</p>
                        <div className={styles.socialButtons}>
                            <button type="button" className={styles.googleButton}>
                                Google
                            </button>

                        </div>
                    </div>

                    <p className={styles.signupLink}>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;