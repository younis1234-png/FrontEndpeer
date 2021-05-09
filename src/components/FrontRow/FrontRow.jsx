import React from "react";
import "./FrontRow.scss";

const FrontRow = () => {
  return (
    <div className="FrontRow">
      <div className="sectionright">
        <div className="sectionRight_imgOverLayer one"></div>
        <img src="" alt="" />
        <div className="sectionRight_imgOverLayer tow"></div>
        <img src="" alt="" />
        <div className="sectionRight_imgOverLayer three"></div>
        <img src="" alt="" />
      </div>
      <div className="section__middle">
        <div className="sound__tryBtn">
          <button>TRY IT NOW</button>
        </div>
        <div className="sound__container">
          <div className="sound__top">
            <h1>FRONT ROW SEATS</h1>
            <div className="sound_bottom">
              <p>Experience concerts up close</p>
              <p>and personal.</p>
            </div>
          </div>
          <div className="sound__btn">
            <button className="btn">SEE DEMO</button>
          </div>
        </div>
      </div>
      <div className="section-bottom">
        <div className="sectionRight_imgOverLayer four"></div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default FrontRow;
