import React, { Component } from "react";
import "../App.css";

class WeatherSnapshot extends Component {
  state = {
    date: new Date(this.props.day.dt * 1000),
    temp: this.props.day.main.temp,
  };

  render() {
    return (
      <div className="snapshot">
        <h3>
          {this.state.date.toLocaleString("en-GB", {
            weekday: "long",
            month: "long",
          })}
        </h3>
        <small>{this.state.temp} degrees</small>
      </div>
    );
  }
}

export default WeatherSnapshot;
