import React, { useState } from "react";
import axios from "axios";

export default function Weatherpattern() {
  const [city, setCity] = useState("");
  const [showing, setShowing] = useState(false);
  const [weatherpattern, setWeatherpattern] = useState({});

  function showWeather(response) {
    console.log(response.data);
    setShowing(true);
    setWeatherpattern({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function Handlesubmit(event) {
    event.preventDefault();

    let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    console.log(apiUrl);
  }
  function Updatecity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form action="" onSubmit={Handlesubmit}>
      <input type="search" onChange={Updatecity} />

      <input type="submit" value="Search" />
    </form>
  );
  if (showing) {
    return (
      <div>
        {form}

        <ul>
          <li>Temperature:{weatherpattern.temperature}°C</li>
          <li>Wind:{weatherpattern.wind}km/h</li>
          <li>Humidity:{weatherpattern.humidity}%</li>
          <li>
            <img src={weatherpattern.icon} alt="Weather icon" />
          </li>
          <li> description:{weatherpattern.description}</li>
        </ul>
      </div>
    );
  } else {
    return <div> {form} </div>;
  }
}
