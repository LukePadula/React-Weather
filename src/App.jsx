import React, { Component } from "react";
import axios from "axios";
import WeatherUpcoming from "./components/WeatherUpcoming";

class App extends Component {
  state = { data: null, daysCount: 0 };

  locationSuccess = async ({ coords }) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=aadef87b858759eb3b16e4073cb59e64&units=metric`
      );
      this.setState({ data: data }, () => {
        console.log(this.state);
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
      <h2>Loading</h2>
    ) : (
      <>
        <h1>Upcoming weather</h1>
        <p>The weather for the upcoming {this.state.daysCount} days</p>
        <WeatherUpcoming data={this.state.data} />
      </>
    );
  }
}

export default App;
