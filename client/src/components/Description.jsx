import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          className="w-80 sm:w-96 rounded-lg "
          alt=""
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            illo similique error id soluta reiciendis, sed at ratione, numquam
            eius impedit. Iste delectus tempora maiores iusto illo neque facere
            corrupti.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            vero recusandae fugit dolore delectus nulla explicabo corporis cum.
            Libero saepe consectetur porro aspernatur doloremque quos eligendi
            minima quam incidunt eaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
