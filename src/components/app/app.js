import React, {Component} from 'react';
import './app.css';
import NasaApi from '../../services/NasaAPIService'
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";

class App extends Component {
  state = {
    date: this.getNow(),
  };

  getNow() {
    const now = new Date();
    const day = (`0${now.getDate()}`).slice(-2);
    const month = (`0${(now.getMonth() + 1)}`).slice(-2);

    return `${now.getFullYear()}-${month}-${day}`;
  };

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
