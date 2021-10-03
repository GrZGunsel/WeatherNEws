import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
const Weathericon = ({ weather }) => {
  const defaults = {
    animate: true,
    size: 80,
  };
  function Weathericons() {
    if (weather === "Clouds") {
      return (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    }
    if (weather === "Clear") {
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    }
    if (weather === "Rain") {
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    }
    if (weather === "Wind") {
      return (
        <ReactAnimatedWeather
          icon="WIND"
          color="white"
          size={defaults.size}
          animate={defaults.animate}
        />
      );
    } else {
      console.error("err");
    }
  }
  return (
    <div>
      <Weathericons />
    </div>
  );
};

export default Weathericon;
