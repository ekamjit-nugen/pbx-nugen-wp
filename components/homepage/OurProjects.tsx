"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blurAnimation, leftToRightAnimation, rightToLeftAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
interface OurProjectsType {
  buttonData: any;
}

const OurProjects: React.FC<OurProjectsType> = ({ buttonData }) => {
  return (
    <motion.section
    {...staggerParent} 
      id="featured-work-section"
      className="w-screen lg:h-screen h-screen section-featured-ref overflow-hidden lg:p-8 relative lg:fixed top-0 left-0 z-10 bg-background shadow-2xl"
    >
      <div className="flex flex-col justify-center lg:grid relative items-start w-full lg:h-screen h-full">
        <motion.div variants={topToBottomAnimation} className="w-full text-center text-4xl md:text-6xl capitalize font-serif font-bold text-primary">
          Our Projects
        </motion.div>
        <div className="flex flex-col justify-center items-center lg:-mt-12 ">
          {buttonData?.length >= 2 && (
            <div className="gap-12 justify-center items-center flex flex-col lg:flex-row ">
              {buttonData?.map((value: any, index: number) => (
                <motion.div
                variants={blurAnimation}
                  key={value.button_title + index}
                  className="lg:h-[350px] bg-white md:w-full w-full lg:w-[400px] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out min-w-[280px] text-black rounded-[22px] border-none md:mx-2 my-6 relative lg:flex lg:flex-col lg:items-center lg:justify-center card group"
                >
                  <div className="relative flex flex-col items-center p-6">
                    <motion.h2 variants={leftToRightAnimation} className="font-extrabold text-2xl text-center group-hover:text-[#ff366b] transition-colors duration-300 capitalize font-serif text-primary">
                      {value?.button_title || ""}
                    </motion.h2>
                    <motion.div variants={leftToRightAnimation} className="justify-center mb-16">
                      <img
                        src={value?.button_image}
                        alt={value?.button_title}
                        className="w-[150px] lg:w-[200px] transition-transform duration-500 transform group-hover:scale-110"
                      />
                    </motion.div>
                  </div>
                  <Link
                    href={{
                      pathname: "/services-section",
                      query: { data: JSON?.stringify(value?.button_value) },
                    }}
                    className="absolute bottom-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-6 transition-all duration-500 bg-[#ff366b] text-white font-bold py-2 px-4 rounded-full"
                  >
                    Show More
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default OurProjects;
