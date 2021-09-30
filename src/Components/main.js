import React from "react";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home.js";
const main = () => {
  var storage = localStorage.length;
  return <div>{storage === 0 ? <Login /> : <Home />}</div>;
};

export default main;
