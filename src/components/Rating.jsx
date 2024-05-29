import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="text-white flex gap-3 lg:w-96 items-center">
      <div>
        <img className="" src={rating.image} alt="images-dis" />
      </div>
      <div className="flex flex-col items-center">
        <img src={rating.ratingImage} alt="" srcset="" />
        <div className=" mt-4">
          <div className="text-lightVoilet">
            <span className=" font-semibold">{rating.score}</span> Score,{" "}
            <span className=" font-semibold">{rating.reviews} </span> Reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
