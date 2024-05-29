import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-[455px] h-[370px]">
      <div className="max-sm:w-[70%] max-sm:h-[95%] cardGradient2 drop-shadow-[0_0px_2px_rgba(255,255,255,0.25)] rounded-2xl mx-auto">
        <div className="">
          <div className="">
            <img src={data.image} alt="" />
          </div>
          <div className=" p-6 sm:p-7">
            <div>
              <h1 className="text-2xl text-lightGray font-semibold">
                {data.title}
              </h1>
            </div>
            <div className=" sm:mt-4 text-[17px] leading-8">
              <p className="text-lightVoilet">{data.discription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
