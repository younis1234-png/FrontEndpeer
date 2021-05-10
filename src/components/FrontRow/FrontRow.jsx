import React from "react";
import "./FrontRow.scss";
import Rapper from "../../assets/rapper.jpg";
import Rapper2 from "../../assets/imgC.png";

const FrontRow = () => {
  return (
    <div className="frontRow">
      <div className="sectionright">
        <div className="topImg__overlay overLay one">
          <div className="content__one content">IMAGE</div>
          <div className="content__tow content">IMAGE</div>
        </div>
        <img src={Rapper2} alt="" />
      </div>
      <div className="sectionBottom img2">
        <div className="bottom__overlay overlay">
          <div className="bottom__content">IMAGE</div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1618176581835-d60e9c2567b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
      </div>
      <div className="fontRow__middle">
        <div className="fontRow__tryBtn ">
          <a href="/pricing">TRY IT NOW</a>
        </div>
        <div className="">
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
