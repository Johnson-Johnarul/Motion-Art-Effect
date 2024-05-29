import React from "react";

const Home = () => {
  return (
    <>
      <div className="mx-auto w-[1320px] max-sm:w-[400px] p-2 lg:p-7 pt-8 max-sm:pt-4 max-sm:-ml-1 items-center flex justify-between">
        <div>
          <img src="images/MotionArtEffect-logo.png" alt="" />
        </div>
        <div className="px-11 py-3 rounded-md bg-white visible max-lg:invisible">
          <div className="text-xl text-center ">Purchase Now</div>
        </div>
      </div>

      <div className="mx-auto w-[1320px] max-sm:w-[350px] max-sm:items-center max-sm:text-center max-sm:mt-2 p-7 mt-8 flex max-sm:flex-col justify-between">
        <div className=" w-[25%] max-sm:w-fit">
          <div className=" w-40 max-sm:w-[95%]">
            <h2 className="text-[22px] max-sm:text-[18px] font-medium leading-8">
              <span className="block max-sm:inline text-transparent bg-clip-text bg-gradient-to-r gradient max-sm:gradient">
                Transform{" "}
              </span>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r gradient">
                Your Website
              </span>
            </h2>
            <div className="text-[22px] max-sm:text-[18px] max-sm:w-[100%] font-medium text-lightGray mt-3 leading-8">
              <p>With Motion Art Effect</p>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="w-4/5 sm:ml-0 md:ml-0 mt-3 max-sm:w-[350px] max-sm:ml-0 xl:ml-3">
          <div className=" sm:w-[400px] md:w-[480px] lg:w-[600px] max-sm:w-[100%] max-sm:p-0 p-2 mt-[-20px] max-sm:mt-3">
            <h1 className="lg:text-[65px] max-sm:text-[35px] max-md:text-[45px] md:text-[50px] font-semibold text-lightGray leading-tight">
              Attract Your Visitors Attention With Colorful
              <span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r gradient">
                  Motion Art Effect
                </span>
              </span>
            </h1>
            <div>
              <p className="text-[18px] max-sm:text-[15px] text-lightVoilet mt-6 max-sm:mt-8">
                Unleash the power of creativity with Motion Art for Elementor -
                your ultimate solution for seamlessly integrating captivating
                animations into your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
