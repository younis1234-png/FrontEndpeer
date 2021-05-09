import React from "react";
import "./Reviews.scss";
import Speaker from "../../assets/speaker-review.png";
import StarIcon from "@material-ui/icons/Star";

const reviewsList = [
  {
    stars: <StarIcon />,
    title: "ARTIST",
    comment: "Love it, it's the Best. I can't live without it!",
  },
  {
    stars: <StarIcon />,
    title: "PRODUCER",
    comment: "Love it, it's the Best. I can't live without it!",
  },
  {
    stars: <StarIcon />,
    title: "MUSIC FAN",
    comment: "Love it, it's the Best. I can't live without it!",
  },
];

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews__tryBtn tryBtn">
        <button>TRY IT NOW</button>
      </div>
      <div className="reviews__img">
        <img src={Speaker} alt="speaker" />
        <img src={Speaker} alt="speaker" />
      </div>
      <h1 className="reviews__heading">REVIEWS</h1>
      <div className="reviews__container">
        {reviewsList.map((review) => (
          <div className="reviews__customers">
            <p className="reviews__stars">
              {review.stars}
              {review.stars} {review.stars}
              {review.stars}
              {review.stars}
            </p>
            <h1 className="reviews__title">{review.title}</h1>
            <p className="reviews__comment">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
