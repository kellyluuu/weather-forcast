
import React from "react";
import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"



const WeatherForecast = ({ img, condition, time }) => {
    return (
        <div className="weather">
            <WeatherIcon img={img} />
            <WeatherData time={time} condition={condition}/>
        </div>
    )
}

export default WeatherForecast