import React, { useState } from "react";
import Circleshit from "../Common/Circleshit";
import Logo from "../Common/Logo";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [name, setname] = useState("");
  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleSubmit = (e) => {
    const value = name;

    console.log(value);

    localStorage.setItem(`name`, `${value}`);
    console.log(localStorage);
  };

  return (
    <div className="background login">
      <Circleshit />
      <div className="loginpannel">
        <div className="logoheading">
          <Logo />
          <h1>Welcome Back !</h1>
        </div>
        <div className="loginForm">
          <p>Please fill up the form</p>
          <input
            type="text"
            value={name}
            id="name"
            placeholder="Your name"
            onChange={handleChange}
          />
          <input type="text" id="purpose" placeholder="Your purpose" />
        </div>
        <div className="Submit">
          <Link to="/" className="link">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
