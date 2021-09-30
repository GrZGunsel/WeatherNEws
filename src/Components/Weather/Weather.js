import React from "react";
import Logo from "../Common/Logo";
import SearchIcon from "../../Image/Search.svg";
import "./weather.css";
import WeatherImage from "../Common/Weatherimage";
import Humidity from "../../Image/humidity.svg";
import Speed from "../../Image/speed.svg";
import Pressure from "../../Image/Pressure.svg";
const Weather = () => {
  const weather = localStorage.getItem("name");

  return (
    <div>
      <div className="background1">
        <div className="weatherPanel">
          <div className="weatherHeader">
            <Logo />
            <h1>Hi {weather}</h1>
          </div>
          <div className="weatherBody">
            <div className="input">
              <img src={SearchIcon} alt="icon" />
              <input type="text" placeholder="Search Search" />
            </div>
            <div className="weather">
              <div className="temperature">
                <h1>80&deg;</h1>
                <WeatherImage />
              </div>
              <div className="weatherDetails">
                <img src={Humidity} alt="" />
                <p>88%</p>
                <img src={Speed} alt="" />
                <p>88 m/s</p>
                <img src={Pressure} alt="" />
                <p>88 m/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
