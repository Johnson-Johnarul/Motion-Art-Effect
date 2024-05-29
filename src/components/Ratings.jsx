import React from "react";
import Rating from "./Rating";

const Ratings = ({ ratingInfo }) => {
  return (
    <div className="mx-auto xl:w-[1320px] lg:w-[1080px] max-sm:w-[350px] sm:w-[600px] p-7 mt-8 flex flex-col justify-between">
      <div className="flex mx-auto text-center ">
        <h1 className="text-[21px] text-lightGray font-medium">
          Trusted by thousands of users around the world
        </h1>
      </div>
      <div className="mt-16 mx-auto flex flex-col gap-16 md:flex-wrap lg:flex-nowrap lg:flex-row xl:gap-28 lg:gap-0 items-center">
        {ratingInfo.map((rating) => {
          return <Rating key={rating.id} rating={rating} />;
        })}
      </div>
    </div>
  );
};

export default Ratings;
