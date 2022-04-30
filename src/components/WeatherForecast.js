
import React from "react";

export default function WeatherForcast(props) {
    return (
        <div className="weather">
            <img src={props.img} alt="" />
            <p><span>conditions:</span>{props.condition}</p>
            <p><span>time:</span> {props.time}</p>
        </div>
    )
}

