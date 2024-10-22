'use client'
import React, { useLayoutEffect, useRef, useState } from "react";
import HeroImageSVG from "../../components/svgContainer/HeroImageSVG";
import HeroImageSVGRight from "../../components/svgContainer/HeroImageSVGRight";
import { Button } from "../../components/ui";
import { Tween } from "react-gsap";
import gsap from "gsap";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import ComputerIcon from "../../components/icons/png/computer-icon.png";
import HashIcon from "../../components/icons/png/hash-icon.png";
import MobileIcon from "../../components/icons/png/mobile-icon.png";
import ToolIcon from "../../components/icons/png/tool-icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import tower from '../icons/png/tower-svg.svg'
import settings from '../icons/png/setting-icon.webp'

import useSize from "../windowSize";
interface PageContent {
  header_title: string,
  header_description: string,
  animated_title: string,
  url: string,
  logo: any,
  url_text: string,
}
export interface PageProps {
  props: PageContent
  svg: any
}
const HeroSection: React.FC<PageProps> = ({ props, svg }) => {
  const { header_title, header_description, url, url_text, logo } = props
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
    // const movedAnimation = gsap.timeline();
    const movedAnimation1 = gsap.timeline();
    // gsap.fromTo(
    //   [splitTextLines.current, getStartedButton.current, rightSvg.current],
    //   {
    //     y: 10,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     stagger: 0.05,
    //     duration: 0.8,
    //     delay: 1,
    //     ease: "elastic",
    //   }
    // );
    // movedAnimation.fromTo(
    //   [computerRef.current, toolRef.current],
    //   {
    //     x: 0,
    //     y: 0,
    //   },
    //   {
    //     x: -12,
    //     y: 20,
    //     rotate: "+=10",
    //     duration: 5,
    //     ease: "none",
    //     repeat: 99,
    //     yoyoEase: true,
    //   }
    // );
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

    // movedAnimation.play();
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
      router.push(url)
    }, 1500);

  }

  return (
    <div className="relative bg-background">
      <section
        className="flex justify-center items-center hero-section-ref relative z-0"
        id="hero-section-ref"
      >
        <div className="absolute -top-[5%] left-[2%]">
          <Image
            src={ComputerIcon}
            alt="computer"
            height={160}
            width={130}
            ref={computerRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>
        <div className="absolute top-[65%] left-[2%] md:top-[56%]">
          <Image
            src={tower}
            alt="hash"
            height={120}
            width={120}
            ref={computerRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>
        <div className="absolute top-[0%] left-[65%] md:left-[57%] md:top-[0%] lg:left-[40%] ">
          <Image
            src={settings}
            alt="mobile"
            height={150}
            width={150}
            ref={iconRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>
        <div className="absolute top-[65%] left-[57%] md:top-[57%] lg:left-[40%]">
          <Image
            src={ToolIcon}
            alt="tool"
            height={120}
            width={160}
            ref={toolRef}
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
          />
        </div>
        <div className="w-full px-4 md:px-32 flex flex-col lg:flex-row ">
          <div className="w-full relative h-[600px] ">
            <div className="absolute top-32 w-[75%] md:w-[60%] lg:w-3/4 z-50 ml-12">
              <div className="text-2xl md:text-3xl lg:text-5xl xl:6xl font-serif font-medium current-heading flex flex-wrap">
                {header_title}
              </div>
              <p>
                {header_description}
              </p>
              <div
                className="mt-4 md:mt-6 lg:mt-10  z-[1000]"
                ref={getStartedButton}
              >
                <Button
                  variant="default"
                  onClick={() => handleContactUs()}
                >
                  {url_text}
                  <ArrowTopRightIcon />
                </Button>
              </div>
            </div>

            <div className="absolute top-90">
              <BackgroundSVG />
            </div>
            <div className="absolute -top-56">
              <HeroImageSVG width={size && size < 800 ? "355" : "450"} />
            </div>
          </div>

          {size && size>1024 && <div className="w-min h-full scale-y-100 md:scale-150 md:py-8 lg:-mr-8 lg:scale-125 py-8 lg:pt-16 lg:flex">
            <HeroImageSVGRight width={size && size < 1024 ? "380" : "520"}/>
          </div>}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

const BackgroundSVG = () => (
  <svg
    width="auto"
    height="300"
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
