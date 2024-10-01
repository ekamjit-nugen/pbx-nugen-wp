"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import HeroImageSVG from "../../components/svgContainer/HeroImageSVG";
import HeroImageSVGRight from "../../components/svgContainer/HeroImageSVGRight";
import { Button } from "../../components/ui";
import { Tween } from "react-gsap";
import gsap from "gsap";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import useBreakpoint from "../../hooks/useBreakpoint";
import ComputerIcon from "../../components/icons/png/computer-icon.png";
import HashIcon from "../../components/icons/png/hash-icon.png";
import MobileIcon from "../../components/icons/png/mobile-icon.png";
import ToolIcon from "../../components/icons/png/tool-icon.png";
import Image from "next/image";
import {useRouter } from "next/navigation";

import useSize from "../windowSize";

const HeroSection = () => {
  const breakpoint = useBreakpoint();
  const router = useRouter();
  let matchMediaToggler = gsap.matchMedia();
  let splitTextLines = useRef(null);
  let getStartedButton = useRef(null);
  let contentcontainer = useRef(null);
  let rightSvg = useRef(null);
  let iconRef = useRef(null);
  let computerRef = useRef(null);
  let hashRef = useRef(null);
  let toolRef = useRef(null);
  const [svgWidth, setSvgWidth] = useState(1000);

  const size = useSize();

  useLayoutEffect(() => {
    const movedAnimation = gsap.timeline();
    const movedAnimation1 = gsap.timeline();
    gsap.fromTo(
      [splitTextLines.current, getStartedButton.current, rightSvg.current],
      {
        y: 10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        delay: 1,
        ease: "elastic",
      }
    );
    movedAnimation.fromTo(
      [computerRef.current, toolRef.current],
      {
        x: 0,
        y: 0,
      },
      {
        x: -12,
        y: 20,
        rotate: "+=10",
        duration: 5,
        ease: "none",
        repeat: 99,
        yoyoEase: true,
      }
    );
    movedAnimation1.fromTo(
      [iconRef.current, hashRef.current],
      {
        x: 0,
        y: 0,
      },
      {
        x: -12,
        y: 12,
        rotate: 270,
        transformOrigin: "center center",
        duration: 18,
        ease: "none",
        repeat: 99,
        yoyoEase: true,
      }
    );
    matchMediaToggler.add("(min-width: 1040px)", () => {
      gsap.fromTo(
        contentcontainer.current,
        {
          x: "0",
        },
        {
          x: "-100%",
          duration: 4,
          scrollTrigger: {
            start: "center 98%",
            end: "end",
            trigger: "#hero-section-trigger",
            scrub: true,
          },
        }
      );
    });

    movedAnimation.play();
    movedAnimation1.play();

    setSvgWidth(window.innerWidth - 0.4);
    
  }, []);

  function handleContactUs() {
    
    gsap.fromTo(
      ".item",
      {
        y: "-100%",
      },
      {
        y: "0%",
        stagger: 0.2,
      }
    );

    setTimeout(() => {
      router.push("/subscribe-section")
    }, 1500);

  }


  // console.log("window",window.innerWidth)

  return (
    <div className="relative lg:h-screen bg-background">
      <section
        className="h-screen lg:h-screen flex justify-center items-center w-screen hero-section-ref relative lg:fixed z-0"
        id="hero-section-ref"
        ref={contentcontainer}
      >
        <div className="absolute top-[10%] left-[2%]">
          <Image
            src={ComputerIcon}
            alt="computer"
            height={160}
            width={130}
            ref={computerRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>
        <div className="absolute top-[75%] left-[2%] md:top-[62%]">
          <Image
            src={HashIcon}
            alt="hash"
            height={120}
            width={120}
            ref={hashRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>
        <div className="absolute top-[16%] left-[62%] md:left-[78%] md:top-[8%] 2xl:top-[16%] 2xl:left-[33%]">
          <Image
            src={MobileIcon}
            alt="mobile"
            height={150}
            width={150}
            ref={iconRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>
        <div className="absolute bottom-[6%] left-[65%] md:bottom-[20%] 2xl:left-[35%]">
          <Image
            src={ToolIcon}
            alt="tool"
            height={120}
            width={160}
            ref={toolRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>

        {/* <div className="w-full mt-0 px-4 md:px-32  top-1/2 flex place-items-center">
          <div className="w-full flex flex-col lg:flex-row gap-12  h-[70vh] md:h-full justify-center">
            <div className="w-full lg:w-3/12  h-auto md:px-12 lg:px-0 z-10 grid grid-cols-3 col-span-full  overflow-x-hidden overflow-y-clip ">
              <div className="absolute z-0 top-16 md:top-[20%] -left-28 md:-left-[10%] w-auto">
                <BackgroundSVG />
              </div>
              <div className="absolute w-full h-full flex justify-center items-center top-20 right-1/3 -left-[32%] md:-top-20 z-10">
                <HeroImageSVG width="540" />
              </div>
              <div className="hidden lg:col-span-3" />
              <div className=" lg:w-auto h-auto col-span-3 relative top-[33%] right-20 pl-8 md:pl-20 pt-12 lg:pt-4 z-50">
                <div className="text-xl md:text-2xl xl:text-4xl font-extrabold current-heading flex flex-wrap gap-x-1 lg:gap-x-3">
                  {"INNOVATIVE-SOLUTIONS-FOR-A-DIGITAL-WORLD"
                    .split("-")
                    .map((letter, index) => (
                      <AnimatedHeading
                        key={`${letter}-${index}`}
                        index={index + 1}
                      >
                        {letter}
                      </AnimatedHeading>
                    ))}
                </div>
                <p ref={splitTextLines}>
                  Your one-stop-shop for all your web services needs.
                </p>
                <div
                  className="mt-4 md:mt-6 lg:mt-10  z-[1000]"
                  ref={getStartedButton}
                >
                  <Button
                    variant="default"
                    onClick={() => router.push("/contact")}
                  >
                    Contact Us
                    <ArrowTopRightIcon />
                  </Button>
                </div>
              </div>
              <div className="hidden lg:col-span-3" />
            </div>
            <div className="w-full h-1/2 lg:h-full md:absolute lg:contents md:bottom-[350px] md:px-12 lg:px-0 z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start col-span-4">
              <HeroImageSVGRight />
            </div>
          </div>
        </div> */}

        <div className="w-full mt-0 px-4 md:px-32 flex flex-col lg:flex-row">
          <div className="flex w-full  lg:w-1/2 items-center relative top-[45rem] bottom-[43rem] lg:top-24 left-12">
            <div className="w-[90%] sm:w-1/2 md:w-full lg:w-4/6 ">
              {/* section 1 */}
              {/* contact us comp */}
              <div className=" lg:w-auto h-auto col-span-3 relative top-60 right-6 pl-8 md:pl-20 pt-12 lg:pt-4 z-50">
                <div className="text-xl md:text-2xl xl:text-4xl font-extrabold current-heading flex flex-wrap gap-x-1 lg:gap-x-3">
                  {"INNOVATIVE-SOLUTIONS-FOR-A-DIGITAL-WORLD"
                    .split("-")
                    .map((letter, index) => (
                      <AnimatedHeading
                        key={`${letter}-${index}`}
                        index={index + 1}
                      >
                        {letter}
                      </AnimatedHeading>
                    ))}
                </div>
                <p ref={splitTextLines}>
                  Your one-stop-shop for all your web services needs.
                </p>
                <div
                  className="mt-4 md:mt-6 lg:mt-10  z-[1000]"
                  ref={getStartedButton}
                >
                  <Button
                    variant="default"
                    onClick={() => handleContactUs()}
                  >
                    Contact Us
                    <ArrowTopRightIcon />
                  </Button>
                </div>
              </div>

              <div className="relative bottom-32 lg:bottom-40 right-32 lg:right-20 ">
                {/* background checkbord */}
                <BackgroundSVG />
              </div>
            </div>
            {/* background ring */}
            <div className="w-[350px] md:w-[600px] lg:w-[540px] relative right-[23rem] md:right-[43rem] lg:right-[70%] bottom-16 lg:bottom-20 ">
              {/* 350 540 */}
              <HeroImageSVG width={size && size < 800 ? "350" : "450"}/>
            </div>
          </div>

          <div className={`w-[70%] sm:w-[55%] md:w-[60%] lg:w-1/2 relative flex items-center left-16  ${size&&size < 769 && size > 425 ? "left-48" : "left-[20%]"} lg:left-52 bottom-[43rem] lg:contents`}>
            <HeroImageSVGRight />
          </div>
        </div>
      </section>
      <div id="hero-section-trigger" className="absolute bottom-[0%]" />
    </div>
  );
};

export default HeroSection;

const AnimatedHeading = ({ index, children }: any) => {
  const delay = (index + (index + 1)) * 0.04;
  const contentHeading = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      contentHeading.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.9,
        duration: 1,
        delay: delay,
        ease: "elastic",
      }
    );
  }, []);

  return <div ref={contentHeading}>{children}</div>;
};

const BackgroundSVG = () => (
  <svg
    width="729"
    height="637"
    viewBox="0 0 729 637"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Tween
      from={{
        svgDraw: 0,
      }}
      to={{
        svgDraw: 1,
      }}
      duration={2}
      delay={0.2}
    >
      <path
        opacity="0.2"
        d="M528.5 176.5H329.5V0.5H528.5V176.5ZM129.5 0.5H328.5V176.5H129.5V0.5ZM128.5 0.5V176.5H-70.5V0.5H128.5ZM529.5 0.5H728.5V176.5H529.5V0.5ZM529.5 177.5H728.5V319.5H529.5V177.5ZM529.5 320.5H728.5V399.5H529.5V320.5ZM529.5 400.5H728.5V639.5H529.5V400.5ZM528.5 400.5V639.5H329.5V400.5H528.5ZM328.5 400.5V639.5H129.5V400.5H328.5ZM128.5 400.5V639.5H-70.5V400.5H128.5ZM128.5 399.5H-70.5V320.5H128.5V399.5ZM129.5 399.5V320.5H328.5V399.5H129.5ZM329.5 399.5V320.5H528.5V399.5H329.5ZM-70.5 177.5H128.5V319.5H-70.5V177.5Z"
        stroke="url(#paint0_radial_13_2789)"
        color="currentColor"
      />
      <defs>
        <radialGradient
          id="paint0_radial_13_2789"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(329 320) rotate(90) scale(328 388.755)"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </Tween>
  </svg>
);
