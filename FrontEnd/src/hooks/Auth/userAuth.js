import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const { data } = await api.post("/auth/login", credentials);
      if (!data?.success) throw new Error(data?.message || "Login failed");

      const userData = await api.get("/auth/me");
      if (!userData.data?.user) throw new Error("Failed to fetch user data");

      setUser(userData.data.user);
      return userData.data.user;
    } catch (error) {
      setUser(null);
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again."
      );
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await api.post("/auth/register", userData);
      if (!data?.success)
        throw new Error(data?.message || "Registration failed");

      const loginData = await api.post("/auth/login", {
        email: userData.email,
        password: userData.password,
      });
      if (!loginData.data?.success) throw new Error("Auto-login failed");

      const userResponse = await api.get("/auth/me");
      if (!userResponse.data?.user)
        throw new Error("Failed to fetch user data");

      setUser(userResponse.data.user);
      return userResponse.data.user;
    } catch (error) {
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
      await api.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch {
      setUser(null);
      navigate("/login");
      throw new Error("Failed to logout properly");
    }
  };

 const [loading, setLoading] = useState(true);

 const checkAuth = async () => {
   try {
     const { data } = await api.get("/auth/me");
     if (data?.user) {
       setUser(data.user);
       return data.user;
     }
     setUser(null);
     return null;
   } catch {
     setUser(null);
     return null;
   } finally {
     setLoading(false);
   }
 };


  return {
    user,
    login,
    register,
    logout,
    checkAuth,
    isAuthenticated: !!user,
    loading,
  };
};
