import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      // 1. Attempt login
      const loginResponse = await api.post("/auth/login", credentials);

      if (!loginResponse.data?.success) {
        throw new Error(loginResponse.data?.message || "Login failed");
      }

      // 2. Get user data (cookies are automatically set)
      const userResponse = await api.get("/auth/me");

      if (!userResponse.data?.user) {
        throw new Error("Failed to fetch user data");
      }

      // 3. Update context and return user
      setUser(userResponse.data.user);
      return userResponse.data.user;
    } catch (error) {
      console.error("Login error:", error);

      // Clear any partial auth state
      setUser(null);

      // Re-throw with user-friendly message
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again."
      );
    }
  };

  const register = async (userData) => {
    try {
      // 1. Attempt registration
      const registerResponse = await api.post("/auth/register", userData);

      if (!registerResponse.data?.success) {
        throw new Error(
          registerResponse.data?.message || "Registration failed"
        );
      }

      // 2. Auto-login after registration
    //   const loginResponse = await api.post("/auth/login", {
    //     email: userData.email,
    //     password: userData.password,
    //   });

      // 3. Get user data
      const userResponse = await api.get("/auth/me");

      if (!userResponse.data?.user) {
        throw new Error("Failed to fetch user data after registration");
      }

      // 4. Update context and return user
      setUser(userResponse.data.user);
      return userResponse.data.user;
    } catch (error) {
      console.error("Registration error:", error);

      // Clear any partial auth state
      setUser(null);

      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Registration failed. Please try again."
      );
    }
  };

  const logout = async () => {
    try {
      // 1. Attempt logout
      await api.post("/auth/logout");

      // 2. Clear local state
      setUser(null);

      // 3. Redirect to login
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);

      // Force clear state even if logout failed
      setUser(null);
      navigate("/login");

      throw new Error("Failed to logout properly");
    }
  };

  // Check auth status on initial load
  const checkAuth = async () => {
    try {
      const { data } = await api.get("/auth/me");
      if (data?.user) {
        setUser(data.user);
        return data.user;
      }
    } catch (error) {
        setUser(null);
        throw error;
    }
    return null;
  };

  return {
    user,
    login,
    register,
    logout,
    checkAuth,
  };
};
