import React from "react";
import "./Home.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import image1 from "../../assets/mike-von-RP7mZFXz7L0-unsplash.jpg";
import image2 from "../../assets/mike-von-Tgp0O6ahBn4-unsplash.jpg";
import image3 from "../../assets/ramiro-pianarosa-8hW2ZB4OHZ0-unsplash.jpg";
import SectionRed from "../../components/SectionRed/SectionRed";
import FrontRow from "../../components/FrontRow/FrontRow";
import Perks from "../../components/Perks/Perks";
import Reviews from "../../components/Reviews/Reviews";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Footer from "../../components/UI/Footer/Footer";

const Home = () => {
  return (
    <div className="hero">
      <ImageSlider images={[image1, image2, image3]}>
        <div className="hero__middle-container">
          <h1 className="hero__heading">INTERACTIVE CONCERT EXPERIENCE</h1>
          <div className="hero__paragraph">
            <p>Experience your favourite artists like never</p>
            <p>before and from the comfort of your own home.</p>
          </div>
        </div>
      </ImageSlider>
      <div className="sectionRed">
        <SectionRed />
      </div>
      <div className="frontRow">
        <FrontRow />
      </div>
      <div className="perks">
        <Perks />
      </div>
      <div className="reviews">
        <Reviews />
      </div>
      <div className="downloadApp">
        <DownloadApp />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
