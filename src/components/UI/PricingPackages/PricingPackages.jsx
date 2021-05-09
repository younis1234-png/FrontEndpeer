import React from "react";
import "./PricingPackages.scss";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { SpeakerNotesOffSharp } from "@material-ui/icons";

const packages = [
  {
    icon: <MusicNoteIcon />,
    list: [
      ["Very good", "Very very good"],
      ["Amazing", "Even Amazing"],
      ["Perfect job"],
      ["Love this", "Love this more"],
      ["It's so good", "It's is so so good"],
      ["Features", "More Features"],
    ],
  },
];

const PricingPackages = () => {
  return (
    <div className="package">
      <div className="package__pricingInfo">
        <h1>PRICING</h1>
        <p>Test out our app today! Choose from three subscrition</p>
        <p>Based payment models.</p>
      </div>
      {packages.map((items, index) => (
        <>
          <div className="package__container">
            <div className="package__left left">
              <div className="package__pricingLeft">
                <h2>BASIC</h2>
                <div className="package__underLine"></div>
                <h2>MINTHLY</h2>
                <span>$9</span>
              </div>
              <p>
                <span>{items.icon}</span>
                {items.list[0][0]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[1][0]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[2][0]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[3][0]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[4][0]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[5][0]}
              </p>
              <div className="link__container"></div>
              <a className="link">SELECT</a>
            </div>
            {/* middle */}
            <div className="package__middle middle">
              <div className="package__pricingMiddle ">
                <h2>ADVANCED</h2>
                <div className="package__underLine"></div>
                <h2>YEARLY</h2>
                <span>$99</span>
              </div>
              <p>
                <span className="package_icon">{items.icon}</span>
                {items.list[0][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[1][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[2][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[3][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[4][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[5][1]}
              </p>
              <div className="link__container"></div>
              <a className="link">SELECT</a>
            </div>
            {/* middle */}
            <div className="package__right right">
              <div className="package__pricingRight">
                <h2>PRO</h2>
                <div className="package__underLine"></div>
                <h2>YEARLY</h2>
                <span>$120</span>
              </div>
              <p>
                <span>{items.icon}</span>
                {items.list[0][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[1][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[2][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[3][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[4][1]}
              </p>
              <p>
                <span>{items.icon}</span>
                {items.list[5][1]}
              </p>
              <div className="link__container">
                <a className="link">SELECT</a>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default PricingPackages;
