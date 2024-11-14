"use client"
import React from "react";
import { HeroSectionType } from "./HeroSection";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  staggerParent,
} from "@/lib/animation/animationUtils";
interface BlogDescriptionType {
  data: HeroSectionType[];
}
const BlogDescription: React.FC<BlogDescriptionType> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data?.map((value) => {
        return (
          <>
            {value?.post_image === undefined && (
              <>
                <motion.div {...staggerParent}>
                  <motion.div
                    variants={leftToRightAnimation}
                    className=" text-2xl lg:text-3xl pl-10 font-bold pb-2"
                  >
                    {value?.post_title}
                  </motion.div>
                  <motion.div
                    variants={leftToRightAnimation}
                    className="text-base pl-10 "
                  >
                    {value?.post_description}
                  </motion.div>
                </motion.div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};
export default BlogDescription;
