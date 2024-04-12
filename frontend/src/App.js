import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HomePage from "./pages/HomePage";
import SellCarPage from './pages/SellCarPage';
import UpdateCarPage from './pages/UpdateCarPage';
import AuthPage from './pages/AuthPage';
import { AuthContext } from './context/authContext';
import RequiredAuth from "./util/authRoutes"

const theme = createTheme({
  palette: {
    primary: {
      main: '#ab1d13',
      light: '#ed3434',
      dark: '#610101'
    },
    secondary: {
      main: '#165fcc',
      light: '#4e8eed',
      dark: '#013480'
    }
  }
})

function App() {
  const [userLoggedData, setUserLoggedData] = useState({
    token: null,
    userId: null,
    isAdmin: false,
  });

  const login = (token, userId, isAdmin) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    setUserLoggedData({ token: token, userId: userId, isAdmin: isAdmin });
  };

  const logout = () => {
    setUserLoggedData({ token: null, userId: null, isAdmin: false });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider
        value={{
          token: userLoggedData.token,
          userId: userLoggedData.userId,
          isAdmin: userLoggedData.isAdmin,
          login: login,
          logout: logout,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/sellCar" element={<RequiredAuth><SellCarPage /></RequiredAuth>} />
          <Route path="/updateCar/:id" element={<RequiredAuth><UpdateCarPage /></RequiredAuth>} />
          {/* <Route path="/admin" element={<RequiredAuth><AdminPage /></RequiredAuth>} /> */}
        </Routes>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
