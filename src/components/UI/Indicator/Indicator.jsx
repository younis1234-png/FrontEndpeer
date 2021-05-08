import React from "react";
import "./Indicator.scss";

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <div className="indicator">
      {Array(amountSlides)
        .fill(1)
        .map((_, index) => (
          <div
            key={index}
            className="indicator__slide"
            isActive={currentSlide === index}
            style={{
              opacity: currentSlide === index ? 1 : 0.4,
            }}
            onClick={() => nextSlide(index)}
          ></div>
        ))}
    </div>
  );
};

export default Indicator;
