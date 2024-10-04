'use client'
import React, { useLayoutEffect, useRef, useState } from "react";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";

interface ImagePropsType {
  post_title: any,
  post_image: any,
  post_description: any
  url:any
}
interface PageContent {
  header_title?: string,
  header_description?: string,
  animated_title?: string,
  number_of_clients?: number,
  world_wide_clients?: string,
  number_of_company?: number,
  trusted_company?: string
}
interface FeaturedWorkSectionProps {
  props: ImagePropsType[],
  pageContent: PageContent
}
const FeaturedWorkSection:React.FC<FeaturedWorkSectionProps> = ({props,pageContent}) => {
  const followHeadingRef = useRef(null);
  const ServiceCardsRef = useRef(null);
  const timeline = gsap.timeline({
    delay: 1.2,
  });
  let matchMediaToggler = gsap.matchMedia();

  useLayoutEffect(() => {
    matchMediaToggler.add("(max-width: 1023px)", () => {
      timeline.fromTo(
        followHeadingRef.current,
        {
          x: "-20%",
        },
        {
          x: "0%",
          stagger: 0.2,
          ease: "easeInOut",
        }
      );
      gsap.fromTo(
        ServiceCardsRef.current,
        {
          x: "-12%",
        },
        {
          x: "0%",
          ease: "easeInOut",
        }
      );
    });
    matchMediaToggler.add("(min-width: 1040px)", () => {
      timeline
        .fromTo(
          followHeadingRef.current,
          {
            x: "50%",
          },
          {
            x: "20%",
            stagger: 0.2,
            ease: "easeInOut",
          }
        )
        .fromTo(
          ServiceCardsRef.current,
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
    });
  });
  return (
    <section
      id="featured-work-section"
      className="trigger w-screen lg:h-screen h-full section-featured-ref overflow-hidden lg:p-8 relative lg:fixed top-0 left-0 z-10 bg-background shadow-2xl"
    >
      <div
        className={`lg:grid lg:grid-cols-12 relative items-start w-full lg:h-screen h-full`}
      >
        <div className="w-full pt-8 pb-4 lg:absolute lg:bottom-0 lg:left-[8%] lg:-rotate-90 origin-bottom-left">
          <Marquee title={pageContent?.animated_title||""} />
        </div>
        <div />
        <div className="flex w-full flex-col justify-center lg:justify-between gap-12 h-[85%] col-span-11 mb-full pb-32">
          <div
            ref={followHeadingRef}
            className="w-full md:w-7/12 p-4 flex flex-col lg:flex-row gap-2 lg:gap-8 items-start lg:items-center"
          >
            <h3 className="uppercase text-2xl font-bold text-primary w-10/12 lg:w-6/12">
              {pageContent?.header_title}
            </h3>
            {pageContent?.header_description && <div className="w-12 border-b border-foreground hidden lg:block" />}
            {pageContent?.header_description && <p className="text-foreground/80">
              {pageContent?.header_description}
            </p>}
          </div>
          <div
            ref={ServiceCardsRef}
            className="px-4 md:px-20 lg:px-12 w-full lg:h-[600px] flex flex-col lg:flex-row gap-6 lg:gap-16 lg:overflow-x-scroll "
          >
            {props.map((value, index) => (
              <ImageCard card={value} key={`${value.post_title}-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;

type ImageCardPropType = {
  card: ImagePropsType
};

const ImageCard = ({ card }: ImageCardPropType) => {
  const { post_title,post_description,post_image, url } = card;
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      className="h-[80dvh] md:h-[50dvh] w-full p-4 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="group w-[400px] bg-white rounded-xl h-3/4 md:h-full relative bottom-0 left-0 flex justify-end flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all p-4 hover:scale-105 duration-500 border">
        <div className="absolute top-0 left-0 scale-100 group-hover:scale-100 transition-all duration-700 object-fill hover:object-contain h-full">
          <Image
            alt=""
            src={post_image}
            width={500}
            height={500}
            className=" z-0 object-fit scale-125 group-hover:scale-100 transition-all duration-700 h-full"
          />
        </div>
        <motion.div
          className="flex flex-col h-[25%]  md:h-1/3 lg:h-[40%]  justify-between items-center z-10 bg-slate-600 p-4 rounded-xl shadow-2xl"
          initial={false}
          animate={{ y: isHovered ? 0 : 90 }}
        >
          <div className="text-white flex justify-between h-1/2">
            <div className="text-xl font-semibold">{post_title}</div>
            {url&&<Link
              href={url||""}
              target="_blank"
              className="w-fit h-fit p-2 transform duration-500 rounded-full border border-white hover:bg-white hover:text-slate-950 cursor-pointer"
            >
              <ArrowTopRightIcon className="text-white hover:text-slate-950"/>
            </Link>}
          </div>
          <div className="text-xs text-white w-full pb-2">{post_description}</div>
        </motion.div>
      </div>
    </motion.div>
  );
};
