import React, { Component } from "react";

class WeatherSnapshot extends Component {
  state = { date: new Date(this.props.day.dt), temp: this.props.day.main.temp };

  render() {
    console.log(this.props.day, "PROPS");

    console.log(this.state.date.getDate());
    return (
      <div>
        <h2>{this.state.date.toLocaleString("default", { month: "long" })}</h2>
        <small>{this.state.temp}</small>
      </div>
    );
  }
}

export default WeatherSnapshot;
