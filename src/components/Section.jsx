import React from "react";
import { GoArrowRight } from "react-icons/go";

const Section = () => {
  return (
    <>
      {/* section 1  */}
      <div className="mx-auto xl:w-[1320px] lg:w-[1080px] max-sm:w-[350px] sm:w-[600px] p-3 mt-12">
        <div className="flex flex-col md:flex-row gap-10 lg:p-6">
          <div className=" lg:w-[780px] md:w-3/3 sm:w-[450px]">
            <h1 className=" lg:text-5xl sm:text-3xl max-sm:text-[30px] font-medium text-lightGray lg:leading-snug">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h1>

            <div>
              <p className="text-lightVoilet text-[18px] leading-8 mt-4 max-sm:text-center max-sm:text-[15px] ">
                Motion Art for Elementor is a groundbreaking plugin that
                empowers you to effortlessly infuse your website with visually
                stunning motion art elements.
              </p>
            </div>

            <div className="max-sm:w-[350px] md:ml-0">
              <div className="buttonGradient p-3 py-4 w-80 rounded-2xl mt-8">
                <div className="text-xl text-lightGray flex gap-4 ml-7">
                  <span>Purchase From Envato</span>
                  <span className=" text-2xl">
                    <GoArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" max-sm:w-[350px] md:w-2/5 flex mt-3 xl:ml-44 h-64 lg:w-64 max-sm:ml-8 md:ml-9">
            <img
              src="images/motionarteffect-img5.png"
              alt="discription"
              srcset=""
            />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="mx-auto lg:w-[1080px] sm:w-4/5 xl:w-11/12 xl:p-16 pt-10 items-center flex flex-col justify-between mt-10 p-2">
        <div className="lg:w-[60%] text-center ">
          <h1 className="lg:text-5xl text-3xl font-medium text-lightGray flex lg:leading-snug px-5 md:px-36 lg:px-0">
            Apply On Any Section Or Enable For Whole Page
          </h1>
        </div>

        <div className=" flex flex-col md:flex-row md:gap-6 mt-16 p-2">
          {/* Card */}
          <div className=" h-[70%] cardGradient rounded-3xl drop-shadow-[0_0px_2px_rgba(255,255,255,0.25)]">
            <div className=" p-8">
              <div>
                <h1 className=" text-2xl text-lightGray font-semibold mt-2">
                  Apply On Section
                </h1>
              </div>
              <div>
                <p className=" text-lg text-lightVoilet mt-5 leading-9">
                  Apply on section is a game-changer, offering an unparalleled
                  way to manage applications directly from your website.{" "}
                </p>
              </div>
              <div className=" mt-8">
                <img src="images/motionarteffect-img11.png" alt="" srcset="" />
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="h-[70%] cardGradient rounded-3xl mt-8 md:mt-16 drop-shadow-[0_0px_2px_rgba(255,255,255,0.25)]">
            <div className=" p-8">
              <div>
                <h1 className=" text-2xl text-lightGray font-semibold mt-2">
                  Apply On Section
                </h1>
              </div>
              <div>
                <p className=" text-lg text-lightVoilet mt-5 leading-9">
                  Apply on section is a game-changer, offering an unparalleled
                  way to manage applications directly from your website.{" "}
                </p>
              </div>
              <div className=" mt-8">
                <img src="images/motionarteffect-img10.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="p-4 ">
        <div className="lg:w-[1320px] sm:w-4/5 p-4 pb-14 lg:pt-10 flex justify-between mx-auto lg:mt-32 cardGradient2 drop-shadow-[0_0px_2px_rgba(255,255,255,0.25)] rounded-2xl">
          <div className="mx-auto p-7 items-center">
            <div className="mx-auto w-4/5 text-center">
              <div className="mt-1">
                <h1 className=" text-2xl text-lightGray font-semibold">
                  Supported by All Popular Browsers
                </h1>
              </div>
              <div className="mt-4 leading-8">
                <p className="text-lightVoilet">
                  Rest assured, Motion Art is designed to be compatible with all
                  major web browsers.
                </p>
              </div>
              <div className="mt-7 ml-4">
                <img src="images/motionarteffect-img8.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="mx-auto lg:w-[1320px] sm:w-4/5 lg:p-7 p-2 pt-10 items-center flex justify-between mt-24 text-center">
        <div className="mx-auto lg:w-[45%]">
          <div>
            <h1 className="text-3xl lgtext-5xl text-lightGray font-medium leading-tight">
              An All-Round Plugin With Powerful Features
            </h1>
          </div>
          <div className="mt-5 leading-8">
            <p className=" text-lightVoilet text-[17px] font-medium">
              Whether you're a seasoned web designer or just starting out,
              Motion Art for Elementor seamlessly integrates with the Elementor
              platform, providing you with a seamless and intuitive experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
