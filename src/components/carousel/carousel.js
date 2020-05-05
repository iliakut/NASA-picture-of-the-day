import React from "react";
import CarouselItem from "./carouselItem/carouselItem";
import "./carousel.css";

const Carousel = ({url, onClickNextPrevious, title, mediaType}) => {
  return (
    <div id="carouselControls" className="carousel slide carousel-container" data-ride="carousel">
      <div className="carousel-inner">
        <CarouselItem
          mediaType={mediaType}
          src={url}
          title={title}
        />
      </div>
      <a
        className="carousel-control-prev"
        href="#"
        role="button"
        data-slide="prev"
        onClick={() => onClickNextPrevious(false)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#"
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
