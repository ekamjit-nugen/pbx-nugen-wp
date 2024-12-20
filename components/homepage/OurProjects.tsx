"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { blurAnimation, leftToRightAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
import Image from "next/image";

interface OurProjectsType {
  buttonData: any;
}

const OurProjects: React.FC<OurProjectsType> = ({ buttonData }) => {
  return (
    <motion.section
      {...staggerParent}
      id="featured-work-section"
      className="w-screen h-screen section-featured-ref overflow-y-auto lg:p-8 relative bg-background shadow-2xl  lg:fixed top-0 left-0 z-10"
    >
      <div className="flex flex-col items-center lg:flex  relative w-full h-full">
        <motion.div variants={topToBottomAnimation} className="w-full text-center text-4xl md:text-6xl capitalize font-serif font-bold text-primary mb-4">
          Our Projects
        </motion.div>
        <div className="flex flex-col justify-center items-center">
          {buttonData?.length >= 2 && (
            <div className="gap-8 flex flex-col lg:flex-row justify-center items-center">
              {buttonData?.map((value: any, index: number) => (
                <Link
                key={value.button_title + index}
                  href={{
                    pathname: "/work-service-section",
                    query: { data: JSON?.stringify(value?.button_value) },
                  }} 
                  style={{ textDecoration: 'none' }}>
                  <motion.div
                    variants={blurAnimation}
                    key={value.button_title + index}
                    className="lg:h-[450px] bg-white w-full lg:w-[450px] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out min-w-[280px] text-black rounded-[22px] border-none my-4 relative lg:flex lg:flex-col lg:items-center lg:justify-center card group"
                  >
                    <div className="relative flex flex-col items-center">
                      <motion.h2 variants={leftToRightAnimation} className="font-extrabold text-xl text-center group-hover:text-[#ff366b] transition-colors duration-300 capitalize font-serif text-primary">
                        {value?.button_title || ""}
                      </motion.h2>
                      <motion.div className="transition-transform duration-500 transform group-hover:scale-110"
                        variants={leftToRightAnimation} >
                        <Image
                          width={200}
                          height={200}
                          src={value?.button_image}
                          alt={value?.button_title}
                          className="transition-transform group-hover:scale-125"

                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default OurProjects;
