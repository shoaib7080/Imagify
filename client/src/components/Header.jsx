import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className="text-4xl sm:text-7xl max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn text to <span className="text-blue-600">image</span>, in seconds
      </h1>
      <p className="text-stone-500 text-lg mt-4">
        Create stunning images with our AI-powered text-to-image generator.
      </p>
      <button className="sm:text-lg text-white bg-black w-auto mt-6 px-12 py-3 rounded-full flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-all duration-300">
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <img
              key={index}
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              className="rounded hover:scale-105 transition-all duration-300 sm:w-20 cursor-pointer"
            />
          ))}
      </div>
      <p className="mt-4">Generated images from imagify</p>
    </div>
  );
};

export default Header;
