"use client";
import React from "react";
import { Button } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blurAnimation, leftToRightAnimation, rightToLeftAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
import circle from "../../image/images/shape-circle.png";
import square from "../../image/images/shape-square.png";
import tri from "../../image/images/shape-triangle.png";
interface ServiceContentType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  url: string;
  image: string;
}
interface ServiceClientsProps {
  className?: string;
  pageContent: ServiceContentType;
}
const CustomizeProject: React.FC<ServiceClientsProps> = ({
  className,
  pageContent,
}) => {
  return (
    <motion.section
      id=""
      className="relative w-full bg-[#080c3c] h-fit Diagonal overflow-x-hidden lg:shadow-2xl lg:py-12"
    >
      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ y: 300 }}
        animate={{ x: 100, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <Image src={circle} alt="image" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",

          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        animate={{ x: "50%" }}
        initial={{ x: "-100%", y: "-100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      ><Image src={square} alt="image" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          top: "10%",
          left: "30%",

          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        animate={{ x: "150%" }}
        initial={{ x: "-150%", y: "-100%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      ><Image src={tri} alt="image" />
      </motion.div>

      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          top: "0%",
          left: "70%",
          right: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ y: 200, x: -100 }}
        animate={{ y: 140, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      ><Image src={circle} alt="image" />
      </motion.div>

      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          top: "10%",
          left: "70%",
          right: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        animate={{ y: "150%" }}
        initial={{ x: "-150%", y: "-150%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      ><Image src={tri} alt="image" />
      </motion.div>

      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          top: "40%",
          left: "70%",
          right: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        animate={{ x: "50%" }}
        initial={{ x: "-100%", y: "-100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      ><Image src={square} alt="image" />
      </motion.div>
      <motion.div       {...staggerParent}
        className={` relative w-full h-full ${className}`}>
        <div className="w-full flex flex-col justify-center md:flex-row pt-4">
          <motion.div variants={leftToRightAnimation} className="h-full w-full lg:-mt-12 flex justify-center items-center">
            <Image
              src={pageContent?.image}
              alt="image"
              height={700}
              width={700}
              className="object-scale-down"
            />
          </motion.div>
          <div className="w-full flex flex-col p-4 text-center">
            <motion.div variants={rightToLeftAnimation} className="font-serif text-[#ff366b] md:w-[75%] w-full text-3xl lg:text-4xl ">
              {pageContent?.animated_title}
            </motion.div>
            <motion.div variants={rightToLeftAnimation} className="pt-8 md:w-[75%] w-full text-center text-white">
              {pageContent?.header_title}
            </motion.div>
            <motion.div variants={rightToLeftAnimation} className="pt-8 md:w-[75%] w-full text-center text-white">
              {pageContent?.header_description}
            </motion.div>
            <motion.div variants={topToBottomAnimation} className="flex justify-start" id="">
              {/* <Link href={pageContent?.url}>
                <Button
                  variant="outline"
                  className="transform duration-500 lg:mt-20 my-20 p-6 text-white border-[#ff366b]"
                >
                  {pageContent?.button_value}
                </Button>
              </Link> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CustomizeProject;
