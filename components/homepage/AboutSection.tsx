"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { leftToRightAnimation, rightToLeftAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import MarqueStarIcon from "../icons/StarIcon";
import circle from "../../image/images/shape-circle.png";
import square from "../../image/images/shape-square.png";
import tri from "../../image/images/shape-triangle.png";

interface AboutContentType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  "img-1": string;
  "img-2": string;
}
interface DataProps {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  post_title: string;
  post_image: string;
  post_description: string;
}
interface ServiceClientsProps {
  className?: string;
  pageContent: AboutContentType;
  Data1?: DataProps[];
  Data2?: DataProps[];
}

const AboutSection: React.FC<ServiceClientsProps> = ({
  className,
  pageContent,
  Data1,
  Data2,
}) => {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        x: "40%",
      },
      {
        x: "0%",
        stagger: 0.2,
        duration: 1.5,
        ease: "easeInOut",
      }
    );
  }, []);

  return (
    <div className="relative">
      {/* Circle Animation */}
      <motion.div
        className="absolute"
        style={{
          top: "0%",
          left: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ y: 300, rotate: 0, opacity: 0 }}
        animate={{ x: 100, rotate: 360, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={circle} alt="circle" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          bottom: "10%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ y: 300, rotate: 0, opacity: 0 }}
        animate={{ x: 100, rotate: 360, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={circle} alt="circle" />
      </motion.div>

      {/* Square Animation */}
      <motion.div
        className="absolute"
        style={{
          top: "40%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-100%", y: "-100%", rotate: 0 }}
        animate={{ x: "50%", rotate: 45 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={square} alt="square" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          bottom: "40%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-100%", y: "-100%", rotate: 0 }}
        animate={{ x: "50%", rotate: 45 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={square} alt="square" />
      </motion.div>

      {/* Triangle Animation */}
      <motion.div
        className="absolute"
        style={{
          top: "10%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-150%", y: "-100%", rotate: 0, opacity: 0 }}
        animate={{ x: "150%", rotate: 180, opacity: 1 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={tri} alt="triangle" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          bottom: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-150%", y: "-100%", rotate: 0, opacity: 0 }}
        animate={{ x: "150%", rotate: 180, opacity: 1 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={tri} alt="triangle" />
      </motion.div>

      {/* Another Circle Animation */}
      <motion.div
        className="absolute"
        style={{
          top: "0%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ y: 200, x: -100, scale: 0.5 }}
        animate={{ y: 140, x: 50, scale: 1.2, opacity: 0.8 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={circle} alt="circle" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          bottom: "20%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ y: 200, x: -100, scale: 0.5 }}
        animate={{ y: 140, x: 50, scale: 1.2, opacity: 0.8 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={circle} alt="circle" />
      </motion.div>

      {/* Another Triangle Animation */}
      <motion.div
        className="absolute"
        style={{
          bottom: "10%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-150%", y: "-150%", rotate: 0 }}
        animate={{ y: "150%", rotate: 120 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={tri} alt="triangle" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          top: "10%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-150%", y: "-150%", rotate: 0 }}
        animate={{ y: "150%", rotate: 120 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={tri} alt="triangle" />
      </motion.div>

      {/* Another Square Animation */}
      <motion.div
        className="absolute"
        style={{
          top: "60%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-100%", y: "-100%", rotate: 0, opacity: 0 }}
        animate={{ x: "50%", rotate: 360, opacity: 0.7 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={square} alt="square" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          bottom: "60%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ x: "-100%", y: "-100%", rotate: 0, opacity: 0 }}
        animate={{ x: "50%", rotate: 360, opacity: 0.7 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image src={square} alt="square" />
      </motion.div>
      <motion.div {...staggerParent} className="relative">
        <div className="py-4">
          <div
            ref={titleRef}
            className="w-full text-6xl capitalize font-serif flex justify-center font-bold gap-10"
          >
            <p className="text-primary">{pageContent?.animated_title}</p>
          </div>
        </div>
        <div className="p-4 pt-16 flex flex-col lg:flex-row justify-center items-center">
          <div className="flex lg:flex-col w-full">
            <div>
              <div className="w-full lg:pl-8 ">
                <motion.div variants={leftToRightAnimation} className="text-primary text-2xl flex items-center">
                  <div
                    className="origin-center rotate-45 sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                  >
                    <MdKeyboardDoubleArrowRight
                      className="absolute z-10 rotate-[315deg] top-[10%] sm:left-[25%] left-[20%]"
                      size={30}
                      color="#8DDC2E"
                    />
                  </div>
                  <span className="ml-4">{pageContent?.header_title}</span>
                </motion.div>
                <motion.div variants={leftToRightAnimation} className="pt-8 w-[90%] lg:pl-16">
                  {pageContent?.header_description}
                </motion.div>
              </div>
              {Data1?.map((value) => {
                return (
                  <div key={value?.post_title} className="w-full lg:pl-8">
                    <motion.div variants={leftToRightAnimation} className="text-primary text-2xl pt-4 flex items-center">
                      <div
                        className="origin-center rotate-45 sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                      >
                        <MdKeyboardDoubleArrowRight
                          className="absolute z-10 rotate-[315deg] top-[10%] sm:left-[25%] left-[20%]"
                          size={30}
                          color="#8DDC2E"
                        />
                      </div>
                      <span className="ml-4">{value?.post_title}</span>
                    </motion.div>
                    <motion.div variants={leftToRightAnimation} className="pt-4 w-[90%] lg:pl-16">
                      {value?.post_description}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <motion.div variants={rightToLeftAnimation} className="h-full w-full lg:w-[45%] flex justify-center items-center p-2">
            <Image
              src={pageContent?.["img-1"]}
              alt="image"
              height={500}
              width={500}
              className="object-scale-down"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={rightToLeftAnimation} className="p-4 pt-16 flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="lg:flex-col w-full">
          {Data2?.map((value) => {
            return (
              <div key={value?.post_title} className="w-full lg:pl-8">
                <motion.div variants={topToBottomAnimation} className="text-primary text-2xl flex items-center">
                  <div
                    className="origin-center rotate-45 sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                  >
                    <MdKeyboardDoubleArrowRight
                      className="absolute z-10 rotate-[315deg] top-[10%] sm:left-[25%] left-[20%]"
                      size={30}
                      color="#8DDC2E"
                    />
                  </div>
                  <span className="ml-4">{value?.post_title}</span>
                </motion.div>
                <motion.div variants={leftToRightAnimation} className="pt-8 w-[90%] lg:pl-16">{value?.post_description}</motion.div>
              </div>
            );
          })}
        </div>
        <motion.div variants={rightToLeftAnimation} className="h-full w-full lg:w-[45%] flex justify-center items-center p-2">
          <Image
            src={pageContent?.["img-2"]}
            alt="image"
            height={500}
            width={500}
            className="object-scale-down"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
