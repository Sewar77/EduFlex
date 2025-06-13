import React from 'react';
import styles from './Login.module.css';
import emailIcon from '../../../assets/images/email.png';
import passwordIcon from '../../../assets/images/password.png';
import logo from "../../../assets/images/eduflex.png";
import { Link } from "react-router-dom";
import { useState } from 'react';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await api.post(
                '/auth/login',
                { email, password },
                { withCredentials: true } // ✅ this is perfect
            );

            navigate('/student/Dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className={styles.loginContainer}>
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
                            disabled={isLoading}
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
                            disabled={isLoading}
                        />
                    </div>

                    <div className={styles.options}>
                        <label className={styles.rememberMe}>
                            <input type="checkbox" disabled={isLoading} />
                            <span>Remember me</span>
                        </label>
                        <Link to="/forgot-password" className={styles.forgotPassword}>
                            Forgot password?
                        </Link>
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <button
                        type="submit"
                        className={styles.loginButton}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <p className={styles.signupLink}>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
