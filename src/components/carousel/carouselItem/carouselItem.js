import React from "react";
import "./carouselItem.css"

const CarouselItem = ({src, title}) => {
  return (
    <div className='carousel-item active'>
      <img src={src}
           className='d-block rounded mx-auto carousel-item-image'
           alt='Loading error'
      />
      <span className='carouselItem-text'>{title}</span>
    </div>
  );
};

export default CarouselItem;
