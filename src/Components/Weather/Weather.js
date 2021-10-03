import React, { useState, useEffect } from "react";
import Logo from "../Common/Logo";
import SearchIcon from "../../Image/Search.svg";
import "./weather.css";

import { Link } from "react-router-dom";
import { getWeatherData } from "./weatherAPi";
import WeatherDetail from "./weatherDetail";

const Weather = () => {
  const Name = localStorage.getItem("name");
  const [City, setCity] = useState("");
  const [weatherData, setweatherData] = useState(null);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getWeatherData(City);
      setweatherData(data);
      setCity("");
    }
  };
  useEffect(() => {}, [weatherData]);
  return (
    <div>
      <div className={`background1`}>
        <div className="weatherPanel">
          <div className="back-button">
            <Link to="/">
              <button className="back"> back</button>
            </Link>
          </div>
          <div className="weatherHeader">
            <Logo />
            <h1>Hi {Name}</h1>
          </div>
          {weatherData !== null ? (
            <div className="weatherBody">
              <div className="input">
                <img src={SearchIcon} alt="icon" />
                <input
                  type="text"
                  value={City}
                  id="myInput"
                  onKeyPress={search}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="search city"
                />
              </div>
              <h1>{weatherData.name}</h1>

              <WeatherDetail
                temp={parseFloat(weatherData.main.temp - 272.15).toFixed(0)}
                speed={weatherData.wind.speed}
                pressure={weatherData.main.pressure}
                humidity={weatherData.main.humidity}
                weather={weatherData.weather[0].main}
              />
            </div>
          ) : (
            <div className="null">
              <div className="input">
                <img src={SearchIcon} alt="icon" />
                <input
                  type="text"
                  value={City}
                  onKeyPress={search}
                  id="myInput"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="search city"
                />
              </div>
              <h1>Use appropriate City name to search</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
