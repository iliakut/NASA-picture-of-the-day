import React from "react";
import "./carouselItem.css"

const CarouselItem = ({src, isActive}) => {
  let wrapperClass = 'carousel-item';
  if (isActive) {
    wrapperClass += ' active';
  }

  return (
    <div className={wrapperClass}>
      <img src={src} className="d-block rounded mx-auto carouselItem-image"
           alt="..."/>
    </div>
  );
};

export default CarouselItem;
