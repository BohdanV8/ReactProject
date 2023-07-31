import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  var navigate = useNavigate();
  return (
    <div style={{ marginTop: 80 }}>
      <h1>Login</h1>
      <form>
        <MyInput type="text" placeholder="Enter your name" />
        <MyInput type="text" placeholder="Enter your password" />
        <MyButton
          onClick={(e) => {
            e.preventDefault();
            setIsAuth(true);
            navigate("/");
            localStorage.setItem("isAuth", "true");
          }}
        >
          Sign in
        </MyButton>
      </form>
    </div>
  );
};

export default Login;
