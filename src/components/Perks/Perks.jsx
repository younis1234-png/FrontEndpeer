import React from "react";
import "./Perks.scss";

const Perks = () => {
  return (
    <div className="perks">
      <div className="">
        <a href="#" className="perks-btn" data-text="color">
          <span className="text-btn">TRY IT NOW</span>
        </a>
      </div>
      <h1 className="perks__heading">PERKS</h1>
      <div className="perks__services">
        <div className="perks__subscription">
          <div className="perks__line red"></div>
          <h2 className="heading__red">
            Subscription <br /> Payment <br /> Model{" "}
          </h2>
          <p>
            No commitment, <br /> cancel anytime. Never <br /> worry about
            forgetting <br /> a payment again!
          </p>
        </div>
        <div className="perks__subscription">
          <div className="perks__line green"></div>
          <h2 className="heading__green">
            No Fee <br /> Cancelation <br /> Policy
          </h2>
          <p>
            No commitment, <br /> cancel anytime. Never <br /> worry about
            forgetting <br /> a payment again!
          </p>
        </div>
        <div className="perks__subscription">
          <div className="perks__line yellow"></div>
          <h2 className="heading__yellow">
            Subscription <br /> Payment <br /> Model
          </h2>
          <p>
            No commitment, <br /> cancel anytime. Never <br /> worry about
            forgetting <br /> a payment again!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
