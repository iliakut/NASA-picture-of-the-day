import React, {Component} from 'react';
import './app.css';
import NasaAPIService from '../../services/NasaAPIService'
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";

class App extends Component {
  state = {
    date: new Date(),
    dateString: this.getDateString(),
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
    this.updatePictureOfTheDay(this.state.key, this.state.dateString);
  }

  nasaService = new NasaAPIService();

  getDateString() {
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
      {dateString: e.target.value},
      () => this.updatePictureOfTheDay(this.state.key, this.state.dateString)
    );
  };

  onAcceptKey = (key) => {
    this.setState({
      key
    })
  };

  onClickNextPrevious = (next) => {
    this.setState(state => {
      const currentDate = state.date;
      let day = currentDate.getDate();

      if (next) {
        day++;
      } else {
        day--;
      }

      currentDate.setDate(day);
      return {
        date: currentDate
      }
    });

    if (next) {

    } else {

    }
  };

  render() {
    const {
      dateString,
      explanation,
      url,
      title,
      copyright
    } = this.state;

    return (
      <div className="app-text">
        <Header
          date={dateString}
          onDateChange={this.onDateChange}
          onAcceptKey={this.onAcceptKey}
        />
        <Carousel
          url={url}
          title={title}
          onClickNextPrevious={this.onClickNextPrevious}
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
