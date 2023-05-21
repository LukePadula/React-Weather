import React, { Component } from "react";
import "../App.css";

class WeatherSnapshot extends Component {
  state = {
    date: new Date(this.props.day.dt * 1000),
    temp: Math.round(this.props.day.main.temp),
    weather: this.props.day.weather[0].description,
  };

  render() {
    return (
      <div className="snapshot">
        <h3>
          {this.state.date.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "numeric",
            day: "numeric",
            weekday: "long",
            month: "long",
          })}
        </h3>
        <small>
          {this.state.weather} {this.state.temp} degrees
        </small>
      </div>
    );
  }
}

export default WeatherSnapshot;
