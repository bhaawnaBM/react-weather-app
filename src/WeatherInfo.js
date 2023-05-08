import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} size={50} />
            <div className="float-left">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <strong>{props.data.Humidity}%</strong>
            </li>
            <li>
              Wind:{" "}
              <strong>
                {props.data.Wind}
                km/h
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
