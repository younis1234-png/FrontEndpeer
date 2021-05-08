import React, { useState, useEffect } from "react";
import Indicator from "../Indicator/Indicator";
import "./ImageSlider.scss";

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 10000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex > images.length - 1 ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  console.log(images);
  return (
    <div className="ImageSlider" {...props}>
      {images.map((imageUrl, index) => (
        <div
          className="ImageSlider__slide"
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></div>
      ))}
      <div className="gradient"></div>
      <Indicator
        nextSlide={nextSlide}
        currentSlide={currentSlide}
        amountSlides={images.length}
      />
      <div className="childrenWrapper">{children}</div>
    </div>
  );
};

export default ImageSlider;