import React from "react";

const Footer = () => {
  return (
    <div className="gradient2">
      <div className="mx-auto w-[82%] py-4 items-center flex flex-col-reverse lg:flex-row gap-5 justify-between mt-20 pt-5">
        <p className=" text-lightVoilet text-sm text-center">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
        <div className="flex text-lightVoilet text-sm gap-6">
          <div>Documentation</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
