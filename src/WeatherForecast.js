import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    let apiKey = "145a5ct23298882a03o149032528bbfe";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div>
              <div className="WeatherForecast-day">Thu</div>
              <WeatherIcon code="01d" size={35} />
              <div className="WeatherForecast-temp">
                <span className="WeatherForecast-max">19°</span>
                <span className="WeatherForecast-min">10°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
