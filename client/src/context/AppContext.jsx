import { createContext, use } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [credit, setCredit] = useState(false);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: {
          token,
        },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
        console.log("Credit balance loaded successfully:", data.credits);
      } else {
        console.error("Failed to load credit balance:", data.message);
      }
    } catch (error) {
      console.error("Error loading credits data:", error);
    }
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/image/generate-image`,
        {
          prompt,
          userId: user._id,
        },
        {
          headers: {
            token,
          },
        }
      );
      if (data.success) {
        setCredit(data.credit);
        return data.image; // Return the generated image
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate("buy-credits");
          toast.error("Insufficient credit balance. Please recharge.");
        }
      }
    } catch (error) {
      console.error("Error generating image:", error);
      throw new Error("Failed to generate image");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const contextValue = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    token,
    setToken,
    credit,
    setCredit,
    backendUrl,
    loadCreditsData,
    generateImage,
    logout,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
