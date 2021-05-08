import React from "react";
import "./Hero.scss";
import ImageSlider from "../UI/ImageSlider/ImageSlider";
import image1 from "../../assets/mike-von-RP7mZFXz7L0-unsplash.jpg";
import image2 from "../../assets/mike-von-Tgp0O6ahBn4-unsplash.jpg";
import image3 from "../../assets/ramiro-pianarosa-8hW2ZB4OHZ0-unsplash.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <ImageSlider images={[image1, image2, image3]}>
        <div className="hero__heading">
          <h1>React.js Image Slider</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, at.
        </p>
      </ImageSlider>
    </div>
  );
};

export default Hero;
