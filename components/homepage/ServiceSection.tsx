"use client";
import React, { useLayoutEffect } from "react";
import { Button } from "../ui";
import gsap from "gsap";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import MacGirl from "../../image/macgirl.png";
import Contact from "../../image/contact.png";
import circle from "../../image/images/shape-circle.png";
import square from "../../image/images/shape-square.png";
import tri from "../../image/images/shape-triangle.png";
import { motion } from "framer-motion";
import { blurAnimation, leftToRightAnimation, rightToLeftAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
interface ServiceContentType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  hr_email: string;
  image: string;
}
interface ServiceClientsProps {
  className?: string;
  pageContent: ServiceContentType;
}
const InterestedSection: React.FC<ServiceClientsProps> = ({
  className,
  pageContent,
}) => {
  const handleClick = () => {
    const emailAddress = "hr@nugeninfo.com";
    const emailSubject = "Interested to Work with us";
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const mailtoLink = `mailto:${emailAddress}`;

    if (isiOS) {
      window.location.href = mailtoLink;
      window.open(mailtoLink, "_blank");
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
          emailSubject
        )}`,
        "_blank"
      );
    }
  };
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

      {/* Another Triangle Animation */}
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
          top: "40%",
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
      <motion.section
        {...staggerParent}
        id=""
        className=" w-full h-full overflow-x-hidden lg:shadow-2xl top-diagonal"
      >
        <div className={` relative items-start w-full h-full ${className}`}>
          <div className="w-full p-8 flex flex-col md:flex-row">
            <div className="w-full lg:pl-32">
              <motion.div variants={topToBottomAnimation} className="font-serif text-red-600 text-3xl lg:text-4xl">
                {pageContent?.header_title}
              </motion.div>
              <motion.div variants={leftToRightAnimation} className="pt-8 w-[80%] text-black">
                {pageContent?.header_description}
              </motion.div>
              <motion.div variants={leftToRightAnimation} className="flex justify-start" id="">
                <Button
                  onClick={handleClick}
                  variant="outline"
                  className="transform duration-500 lg:mt-20 my-20 p-6 border-[#ff366b]"
                >
                  Join Now
                </Button>
              </motion.div>
            </div>
            <motion.div variants={rightToLeftAnimation} className="h-full w-full lg:-mt-12 flex justify-start ">
              <Image
                src={pageContent?.image}
                alt="image"
                height={600}
                width={600}
                className="object-scale-down"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>

  );
};

export default InterestedSection;
