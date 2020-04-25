import React, {Component} from "react";
import CarouselItem from "./carouselItem/carouselItem";

export default class Carousel extends Component {
  state = {
    imageItems: [
      {src: 'https://apod.nasa.gov/apod/image/2004/ZGL-200422-0497_1024.jpg'},
      {src: 'https://apod.nasa.gov/apod/image/2004/ISS002-E-7377_1024c.jpg'},
      {src: 'https://apod.nasa.gov/apod/image/2004/EyeOnMW_Claro_960.jpg'},
    ],
    activeIndex: 0,
  };

  onClickNext = () => {
    const imageItemsLength = this.state.imageItems.length;

    this.setState((state) => {
      let newActiveIndex = state.activeIndex;

      if (newActiveIndex === imageItemsLength - 1) {
        newActiveIndex = 0;
      } else {
        newActiveIndex += 1;
      }

      return {
        activeIndex: newActiveIndex
      }
    });
  };

  render() {
    const {imageItems, activeIndex} = this.state;
    const CarouselItems = imageItems.map((item, index) => {
      return (
        <CarouselItem
          key={item.src}
          src={item.src}
          isActive={index === activeIndex}

        />
      );
    });

    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {CarouselItems}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
          onClick={this.onClickNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  };
};