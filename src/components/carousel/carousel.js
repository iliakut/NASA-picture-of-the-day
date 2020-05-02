import React from "react";
import CarouselItem from "./carouselItem/carouselItem";
import "./carousel.css";

const Carousel = ({url, onClickNextPrevious, title}) => {
  return (
    <div id="carouselExampleControls" className="carousel slide carousel-container" data-ride="carousel">
      <div className="carousel-inner">
        <CarouselItem
          src={url}
          title={title}
        />
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={() => onClickNextPrevious(false)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        onClick={() => onClickNextPrevious(true)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
