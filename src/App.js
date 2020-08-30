import React from "react";

import { Cards, Chart, CountryPicker } from "./components/index.js";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/covid-19-image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.images} src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <p>
          Made By{" "}
          <a href="https://gauravkumar34.github.io/portfolio/">Gaurav Kumar</a>
        </p>
      </div>
    );
  }
}

export default App;
