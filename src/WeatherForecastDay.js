import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-max">{props.data.temp.max}°</span>
        <span className="WeatherForecast-min">{props.data.temp.min}°</span>
      </div>
    </div>
  );
}
