import React from "react";
import Card from "./Card";

const cardInfo = [
  {
    id: "1",
    image: "images/motionarteffect-img9.png",
    title: "Light Weight",
    discription: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    id: "2",
    image: "images/motionarteffect-img6.png",
    title: "100% Responsive",
    discription: "Create a consistent visual experience across all devices.",
  },
  {
    id: "3",
    image: "images/motionarteffect-img7.png",
    title: "User Friendly Interface",
    discription:
      "Ensure a smooth experience for both applicants and administrators.",
  },
];

const Cards = () => {
  return (
    <div className="mx-auto lg:w-[1320px] sm:w-4/5 lg:p-7 max-sm:p-10 pt-10 items-center flex flex-col lg:flex-row gap-6 justify-between mt-1 relative">
      {cardInfo.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Cards;
