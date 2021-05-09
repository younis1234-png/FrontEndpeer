import React from "react";
import "./SectionRed.scss";
import Speakers from "../../assets/speakers.png";
import Music from "../../components/UI/Music/Music";

const SectionRed = () => {
  return (
    <div className="sound">
      <div className="sound__tryBtn">
        <button>TRY IT NOW</button>
      </div>
      <div className="sound__container">
        <div className="sound__top">
          <h1>SUPERIOR SOUND</h1>
          <div className="sound_bottom">
            <p>Experience live version of your</p>
            <p>favourite songs.</p>
          </div>
        </div>
        <div className="sound__btn">
          <button className="btn">SEE DEMO</button>
        </div>
      </div>
      <div className="sound__speakers">
        <div className="sound__img">
          <img src={Speakers} alt="speakers" />
          <Music />
        </div>
      </div>
    </div>
  );
};

export default SectionRed;
