import React from "react";
import "./DownloadApp.scss";

const DownloadApp = () => {
  return (
    <div className="app">
      <div className="app__left">
        <h1 className="app__title">GET EXP|CON NOW</h1>
        <p className="app__info">Purchase and download the app.</p>
      </div>
      <div className="app__tryBtn tryBtn">
        <a
          href="#"
          className="app-btn"
          style={{ color: "#fff" }}
          data-text="color"
        >
          <span style={{ color: "#fff" }} className="text-btn">
            PRICE
          </span>
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;
