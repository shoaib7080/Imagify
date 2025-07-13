import React from "react";
import { motion } from "framer-motion";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center my-20 py-12"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center">
          What our <span className="text-blue-600">clients</span> say
        </h1>
        <p className="text-stone-500 text-lg mb-12">
          See what our clients are saying about their experience with our AI
        </p>
        <div className="flex flex-wrap gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/20 p-12 rounded-lg shadow-md border border-gray-300 w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  className="rounded-full w-14"
                  alt=""
                />
                <h2 className="text-xl font-semibold mt-3">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500 mb-4">{testimonial.role}</p>
                <div className="flex mb-4">
                  {Array(testimonial.stars)
                    .fill()
                    .map((_, index) => (
                      <img src={assets.rating_star} className="w-4" alt="" />
                    ))}
                </div>
                <p className="text-center text-sm text-gray-600">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
