"use client";
import { FacebookIcon } from "@/components/icons";
import { Dna, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import dummyImage from "../../components/icons/png/Waterfall-landscape.jpg";
import { DataProps } from "../homepage/AboutSection";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  blurAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
interface BlogSideBarType {
  socialData: DataProps[];
}
const BlogSideBar: React.FC<BlogSideBarType> = ({ socialData }) => {
  return (
    <motion.div
      {...staggerParent}
      className="pt-8 px-2 sm:px-8 md:px-32 lg:px-16 flex flex-col gap-8 sticky top-0 z-40"
    >
      <motion.div variants={leftToRightAnimation} className="border-2 border-white-700 rounded-3xl p-4 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <motion.div variants={rightToLeftAnimation} className="">
            <Mail />
          </motion.div>
          <motion.div
            variants={rightToLeftAnimation}
            className="text-base font-bold"
          >
            Stay up to date
          </motion.div>
        </div>
        <motion.div variants={rightToLeftAnimation} className="">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </motion.div>
        <div className="border-2 border-white-700 px-2 py-4 rounded-xl flex justify-between items-center">
          <input
            type="text"
            className="outline-none"
            placeholder="Enter your email address"
          />
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      <motion.div variants={leftToRightAnimation} className="border-2 border-white-700 rounded-3xl p-4 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="">
            <Dna />
          </div>
          <motion.div
            variants={topToBottomAnimation}
            className="text-base font-bold"
          >
            We are on socials
          </motion.div>
        </div>
        <div className="grid grid-cols-2">
          {socialData?.map((value) => {
            return (
              <>
                <Link
                  href={value?.button_value}
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex items-center gap-4 py-1">
                    <motion.div variants={leftToRightAnimation}>
                      <Image
                        src={value?.post_image}
                        height={40}
                        width={40}
                        alt="image"
                        className="!m-0"
                      />
                    </motion.div>
                    <motion.div
                      variants={leftToRightAnimation}
                      className="text-base"
                    >
                      {value?.post_title}
                    </motion.div>
                    {/* <div className="text-sm">{value?.post_description}</div> */}
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </motion.div>

      <motion.div variants={leftToRightAnimation} className="border-2 border-white-700 rounded-3xl p-4 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-base font-bold">Top 10 categories</div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 flex items-center">
            <Image
              src={dummyImage}
              alt="image"
              className="!m-0 rounded-xl  h-full w-full"
            />
          </div>
          <div className="">
            <div className="text-base font-bold">video</div>
            <div className="text-base">Articles</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogSideBar;
