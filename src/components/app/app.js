import React, {Component} from 'react';
import './app.css';
import NasaAPIService from '../../services/NasaAPIService'
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";

class App extends Component {
  state = {
    date: this.getNow(),
    explanation: '',
    url: '',
    hdUrl: '',
    mediaType: '',
    title: '',
    copyright: '',
    key: null,
  };

  constructor() {
    super();
    this.updatePictureOfTheDay(this.state.key, this.state.date);
  }

  nasaService = new NasaAPIService();

  getNow() {
    const now = new Date();
    const day = (`0${now.getDate()}`).slice(-2);
    const month = (`0${(now.getMonth() + 1)}`).slice(-2);

    return `${now.getFullYear()}-${month}-${day}`;
  };

  async updatePictureOfTheDay(key, date) {
    const data = await this.nasaService.getDataInExactDay(key, date);

    this.setState({
      explanation: data.explanation,
      url: data.url,
      hdUrl: data.hdurl,
      mediaType: data.media_type,
      title: data.title,
      copyright: data.copyright
    })
  }

  onDateChange = (e) => {
    this.setState(
      {date: e.target.value},
      () => this.updatePictureOfTheDay(this.state.key, this.state.date)
    );
  };

  onAcceptKey = (key) => {
    this.setState({
      key
    })
  };

  render() {
    const {
      date,
      explanation,
      url,
      title,
      copyright
    } = this.state;

    return (
      <div className="app-text">
        <Header
          date={date}
          onDateChange={this.onDateChange}
          onAcceptKey={this.onAcceptKey}
        />
        <Carousel
          url={url}
          title={title}
        />
        <Footer
          text={explanation}
          copyright={copyright}
        />
      </div>
    );
  }
}

export default App;
