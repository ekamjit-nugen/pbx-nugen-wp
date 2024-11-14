"use client";
import Image from "next/image";
import React from "react";
import image from "../../components/icons/png/dummyimage2.png";
import { BlogPageType } from "../homepage/BlogPage";
import { motion } from "framer-motion";
import {
  blurAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";

const RelaedPosts: React.FC<BlogPageType> = ({ BlogData }) => {
  return (
    <>
      <motion.div
        {...staggerParent}
        variants={leftToRightAnimation}
        className="bg-[#f5f6f8] px-0 sm:px-16 pb-24"
      >
        <motion.div
          variants={rightToLeftAnimation}
          className="text-4xl font-bold py-8 px-4"
        >
          Related Posts
        </motion.div>
        <div className="flex flex-wrap gap-8 justify-center">
          {BlogData.map((value) => {
            return (
              <>
                <motion.div
                  variants={leftToRightAnimation}
                  className="w-72 relative h-[400px] object-none rounded-3xl border-2"
                >
                  <Image
                    src={value?.post_image}
                    width={500}
                    height={500}
                    alt="image"
                    className="absolute z-0 !m-0 h-full w-full rounded-3xl"
                  />
                  <div className="w-full absolute bottom-0 z-90 flex justify-center p-4 ">
                    <div className="w-[95%] text-red-600 bg-white  rounded-3xl p-4 flex flex-col gap-2">
                      {/* <div className="flex flex-wrap">
                                            <button className='border-2 rounded-full text-sm px-2'>outdoor</button>
                                            <button className='border-2 rounded-full text-sm px-2'>outdoor</button>
                                            <button className='border-2 rounded-full text-sm px-2'>outdoor</button>
                                        </div> */}
                      <motion.div
                        variants={topToBottomAnimation}
                        className="font-bold text-black text-base"
                      >
                        {value?.post_title}
                      </motion.div>
                      <div className="flex gap-2">
                        <motion.div
                          variants={rightToLeftAnimation}
                          className=""
                        >
                          <Image
                            src={image}
                            alt="image"
                            className="w-12 h-12 rounded-full !m-0"
                          />
                        </motion.div>
                        <div className="">
                          <motion.div
                            variants={rightToLeftAnimation}
                            className="text-base"
                          >
                            Name
                          </motion.div>
                          <motion.div
                            variants={rightToLeftAnimation}
                            className="text-base"
                          >
                            Time
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default RelaedPosts;
