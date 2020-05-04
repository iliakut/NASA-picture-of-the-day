import React, {Component, Fragment} from 'react';
import './app.css';
import NasaAPIService from '../../services/NasaAPIService'
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";
import Spinner from "../UI/spinner";
import Alert from "../UI/alert";

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
    key:  sessionStorage.getItem('API-key'),
    pictureDate: '',
    loading: true,
    error: false,
    errorMessage: '',
  };

  componentDidMount() {
    this.updatePictureOfTheDay(this.state.key, this.state.dateString);
  }

  nasaService = new NasaAPIService();

  getDateString(dateToConvert) {
    const date = dateToConvert || new Date();
    const day = (`0${date.getDate()}`).slice(-2);
    const month = (`0${(date.getMonth() + 1)}`).slice(-2);

    return `${date.getFullYear()}-${month}-${day}`;
  };

  async updatePictureOfTheDay(key, date) {
    this.setLoading(true);
    if (this.state.pictureDate === date) return;

    try {
      const data = await this.nasaService.getDataInExactDay(key, date);
      this.setState({
        explanation: data.explanation,
        url: data.url,
        hdUrl: data.hdurl,
        mediaType: data.media_type,
        title: data.title,
        copyright: data.copyright,
        pictureDate: data.date,
        loading: false
      })
    } catch (e) {
      this.errorHandler(e);
    }
  }

  errorHandler(error) {
    if (error) {
      this.setState({
        error: true,
        errorMessage: error.msg
      })
    } else {
      this.setState({
        error: false,
        errorMessage: '',
      })
    }
  }

  setLoading(loading) {
    this.setState({
      loading
    })
  }

  onDateChange = (e) => {
    this.setState(
      {dateString: e.target.value},
      () => this.updatePictureOfTheDay(this.state.key, this.state.dateString)
    );
  };

  onAcceptKey = (key) => {
    if (this.state.key === key) return;
    this.setState({
      key
    })
  };

  onClickNextPrevious = (next) => {
    this.setState(
      state => {
        const currentDate = state.date;
        let day = currentDate.getDate();

        if (next) {
          day++;
        } else {
          day--;
        }
        currentDate.setDate(day);
        if (this.isFutureCheck(currentDate)) return;
        return {
          date: currentDate,
          dateString: this.getDateString(currentDate)
        }
      },
      () =>  this.updatePictureOfTheDay(this.state.key, this.state.dateString)
    );
  };

  isFutureCheck(date) {
    const now = new Date();
    return now <= date;
  };

  render() {
    const {
      dateString,
      explanation,
      url,
      title,
      copyright,
      loading,
      error,
      errorMessage
    } = this.state;

    let mainContent = <Spinner/>;
    if (error) {
      mainContent = <Alert message={errorMessage}/>
    } else if (!loading) {
      mainContent = (
        <Fragment>
          <Carousel
            url={url}
            title={title}
            onClickNextPrevious={this.onClickNextPrevious}
          />
          <Footer
            text={explanation}
            copyright={copyright}
          />
        </Fragment>
      )
    }

    return (
      <div className="app-text">
        <Header
          date={dateString}
          onDateChange={this.onDateChange}
          onAcceptKey={this.onAcceptKey}
        />
        {mainContent}
      </div>
    );
  }
}

export default App;
