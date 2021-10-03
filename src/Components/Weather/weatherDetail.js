import React from "react";
import WeatherImage from "../Common/Weatherimage";
import Humidity from "../../Image/humidity.svg";
import Speed from "../../Image/speed.svg";
import Pressure from "../../Image/Pressure.svg";
import "./weather.css";
import Weathericon from "./Weathericon";
const weatherDetail = ({ temp, humidity, speed, pressure, weather }) => {
  return (
    <div>
      <div className="weather">
        <div className="temperature">
          <h1>{temp}&deg;</h1>
          <Weathericon weather={weather} />
        </div>
        <div className="weatherDetails">
          <img src={Humidity} alt="" />
          <p>{humidity}%</p>
          <img src={Speed} alt="" />
          <p>{speed} m/s</p>
          <img src={Pressure} alt="" />
          <p>{pressure} pa</p>
        </div>
      </div>
    </div>
  );
};

export default weatherDetail;
