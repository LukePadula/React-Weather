import React, { Component } from "react";
import WeatherSnapshot from "./WeatherSnapshot";

class WeatherUpcoming extends Component {
  state = {};
  render() {
    const { data } = this.props;

    return (
      <>
        {data.list.map((day) => {
          return <WeatherSnapshot day={day} />;
        })}
        ;
      </>
    );
  }
}

export default WeatherUpcoming;
