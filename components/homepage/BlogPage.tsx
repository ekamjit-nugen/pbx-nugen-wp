"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { motion } from "framer-motion";
import {
  blurAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
export interface BlogDataType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  post_title: string;
  post_image: string;
  post_description: string;
  date: string;
  button_title: string;
}
export interface BlogPageType {
  BlogData: BlogDataType[];
}
const BlogPage: React.FC<BlogPageType> = ({ BlogData }) => {
  return (
    <motion.div {...staggerParent} className="bg-background h-screen">
      {/* Title Section */}
      <div className="text-center">
        <div className="w-full py-4 text-center text-4xl md:text-6xl capitalize font-serif font-bold text-primary mb-4">
          Blog
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto md:px-0 items-center mb-32 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto rounded-lg">
          {BlogData.map((blog, index) => (
            <Link
              href={{
                pathname: "/blog-nugen",
                query: {
                  blog: blog?.button_value,
                },
              }}
              className="text-blue-500 font-medium relative group"
              style={{ textDecoration: "none" }}
            >
              <div
                key={index}
                className="flex bg-white shadow-2xl rounded-2xl hover:shadow-lg transition group h-[350px]"
              >
                {/* Image Section */}
                <motion.div
                  variants={leftToRightAnimation}
                  className="w-2/3 rounded-2xl"
                >
                  <img
                    src={blog?.post_image}
                    alt={"image"}
                    className="!m-0 w-full h-full object-cover rounded-l-2xl"
                  />
                </motion.div>

                {/* Text Section */}
                <div className="container mx-auto p-6 w-2/3 flex flex-col">
                  <motion.p
                    variants={topToBottomAnimation}
                    className="text-gray-500 text-sm mb-3 flex items-center"
                  >
                    <span className="mr-2">📅</span>
                    {blog.date}
                  </motion.p>
                  <motion.div
                    variants={topToBottomAnimation}
                    className="text-md font-semibold text-gray-800  pt-4 pb-2"
                  >
                    {blog.post_title}
                  </motion.div>
                  <motion.p
                    variants={leftToRightAnimation}
                    className="text-gray-600 mb-6 text-base overflow-hidden pb-4"
                  >
                    {blog.post_description}
                  </motion.p>
                  <motion.div variants={rightToLeftAnimation}>
                    {" "}
                    <Button className="w-fit">{blog?.button_title}</Button>
                  </motion.div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
