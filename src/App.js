import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/app.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
