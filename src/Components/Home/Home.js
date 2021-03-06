import React from "react";
import "./Home.css";
import Logo from "../Common/Logo";
import Weatherimage from "../Common/Weatherimage";
import Newsimage from "../Common/Newsimage";
import { Link } from "react-router-dom";
const Home = () => {
  const handleSubmit = () => {
    localStorage.clear();
  };
  return (
    <div className="background">
      <section className="Navbar">
        <Logo />
        <Link to="/">
          <div className="logout">
            <button onClick={handleSubmit}> logout</button>
          </div>
        </Link>
      </section>
      <section className="body">
        <Link to="/weather">
          <div className="wrapper">
            <Weatherimage />
            <h1>Weather app</h1>
          </div>
        </Link>
        <Link to="/weather">
          <div style={{ display: "none" }}></div>
          <div className="wrapper">
            <Newsimage />
            <h1>News app</h1>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
