import React, { Component } from "react";
import axios from "axios";
import WeatherUpcoming from "./components/WeatherUpcoming";
import "./App.css";

class App extends Component {
  state = { data: null, daysCount: 0 };

  countDays = (data) => {
    let weatherDates = [];
    console.log(data.list);
    data.list.forEach((weatherSnapshot) => {
      console.log(weatherSnapshot, "SNAP");
      let date = new Date(weatherSnapshot.dt * 1000);
      console.log(date.getDate());
      if (!weatherDates.includes(date.getDate()))
        weatherDates.push(date.getDate());
    });
    if (weatherDates.length > 0)
      this.setState({ daysCount: weatherDates.length });
  };

  locationSuccess = async ({ coords }) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=aadef87b858759eb3b16e4073cb59e64&units=metric`
      );
      this.setState({ data: data }, () => {
        this.countDays(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  locationError = (error) => {
    console.log(error);
    errorDomMessage();
  };

  componentDidMount() {
    // Find location
    navigator.geolocation.getCurrentPosition(
      this.locationSuccess,
      this.locationError
    );
  }
  render() {
    return !this.state.data ? (
      <div className="loading-cont">
        <h2 className="loading-text">Loading</h2>
      </div>
    ) : (
      <div className="content">
        <h1>Upcoming weather</h1>
        <h2>The weather for the upcoming {this.state.daysCount} days</h2>
        <WeatherUpcoming data={this.state.data} />
      </div>
    );
  }
}

export default App;
