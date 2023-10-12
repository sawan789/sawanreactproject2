import React from "react";
import { Button } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import Protected from "./Protected";
import App from "../../App";
import Navbox from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const getemail = localStorage.getItem("emailData");
  const getpassword = localStorage.getItem("passwordData");
  const login = (event) => {
    event.preventDefault();
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
    navigate("/");
  };
  useEffect(() => {
    //   let login = localStorage.getItem("login");
    if (getemail && getpassword) {
      navigate("/");
    }
  });

  return (
    <div style={{ textAlign: "center" }}>
      <br /> <br />
      <h2>Log in here</h2>
      <form onSubmit={login}>
        <div>
          <input type="text" ref={email} placeholder="Type Email..." />
        </div>
        <br />
        <div>
          <input
            type="password"
            ref={password}
            placeholder="Type Password..  "
          />
        </div>
        <div>
          <br />
          <button>LogIn</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
