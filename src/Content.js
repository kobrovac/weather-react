import React from "react";

export default function Content() {
  return (
    <div>
      <div className="overview">
        <h1 id="city"></h1>
        <ul>
          <li>
            Last updated:{" "}
            <span id="date">Wednesday, April 5 of 2023 - 10:57</span>
          </li>
          <li id="description"></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <div>
              <strong>
                <span className="units">8°C</span>
              </strong>
              <br />⛅ Parly Cloudy
            </div>

            <div>
              <strong id="temperature"></strong>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels like: <span id="feels-like">5</span> °C
            </li>
            <li>
              Humidity: <span id="humidity">50</span>%
            </li>
            <li>
              Wind: <span id="wind">2</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
