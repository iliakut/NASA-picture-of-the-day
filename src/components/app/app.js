import React, {Component} from 'react';
import './app.css';
import NasaAPIService from '../../services/NasaAPIService'
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";

class App extends Component {
  state = {
    date: this.getNow(),
  };

  constructor() {
    console.log(111)
    super();
    //this.updatePictureOfTheDay();
  }

  nasaService = new NasaAPIService();

  getNow() {
    const now = new Date();
    const day = (`0${now.getDate()}`).slice(-2);
    const month = (`0${(now.getMonth() + 1)}`).slice(-2);

    return `${now.getFullYear()}-${month}-${day}`;
  };

  async updatePictureOfTheDay() {
    const data = await this.nasaService.getData();
    console.log(data);
  }

  render() {
    const {date} = this.state;

    return (
      <div className="app-text">
        <Header
          date={date}
        />
        <Carousel/>
        <Footer/>
      </div>
    );
  }
}

export default App;
