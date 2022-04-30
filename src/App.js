import React from "react";
import "./styles.css";
import weatherData from "./weatherData"
import WeatherForcast from "./components/WeatherForecast";



export default function App() {
  const data = weatherData.map((el, index) => {
    return <WeatherForcast img={el.img} condition={el.condition} time={el.time} key={index} />
  })
  return (
    <div className="App">
      {data}

    </div>
  );
}
