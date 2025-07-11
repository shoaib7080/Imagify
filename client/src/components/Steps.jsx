import React from "react";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-20">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="text-lg text-gray-600 mb-8">
        Transform Words Into Stunning Images
      </p>
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((step, index) => (
          <div
            className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border border-gray-300 cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-xl"
            key={index}
          >
            <img src={step.icon} alt="" />
            <div>
              <h2 className="text-xl font-medium">{step.title}</h2>
              <p className="text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
