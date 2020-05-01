import React from "react";
import "./carouselItem.css"

const CarouselItem = ({src}) => {
  return (
    <div className='carousel-item active'>
      <img src={src} className="d-block rounded mx-auto carouselItem-image"
           alt="..."/>
    </div>
  );
};

export default CarouselItem;
