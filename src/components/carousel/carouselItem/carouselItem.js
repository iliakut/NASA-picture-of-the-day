import React from "react";
import "./carouselItem.css"

const CarouselItem = ({src, title, mediaType}) => {
  return (
    <div className='carousel-item active'>
      {
        mediaType === 'image'
        ? <img
            src={src}
            className='d-block rounded mx-auto carousel-item-image'
            alt='Loading error'
          />
        : <iframe
            title="video"
            src={src}
            frameBorder="0"

            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            className='d-block rounded mx-auto carousel-item-video'
            allowFullScreen>
          </iframe>
      }
      <span className='carouselItem-text'>{title}</span>
    </div>
  );
};

export default CarouselItem;
