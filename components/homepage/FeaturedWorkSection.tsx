'use client'
import React, { useLayoutEffect, useRef, useState } from "react";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import SIMPLY5 from "../../image/images/Simply5.png";
import ICK from "../../image/images/ick.png";
import ProtaxCanada from "../../image/images/protax canada.png";
import gsap from "gsap";

const ProjectArray = [
  {
    title: "Simply5",
    products: "Web App | Mobile App | Electron App",
    image: SIMPLY5,
    url: "https://www.simply5.io",
  },
  {
    title: "India Car Kharido",
    products: "Web App | Admin Panel",
    image: ICK,
    url: "https://www.indiacarkharido.com",
  },
  {
    title: "Protax Canada",
    products: "Web App | Mobile App",
    image: ProtaxCanada,
    url: "https://www.protaxcanada.ca/",
  },
];

const FeaturedWorkSection = () => {
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
          <Marquee title="FEATURED WORK" />
        </div>
        <div />
        <div className="flex w-full flex-col justify-center lg:justify-between gap-12 h-[85%] col-span-11 mb-full pb-32">
          <div
            ref={followHeadingRef}
            className="w-full md:w-7/12 p-4 flex flex-col lg:flex-row gap-2 lg:gap-8 items-start lg:items-center"
          >
            <h3 className="uppercase text-2xl font-bold text-primary w-10/12 lg:w-6/12">
              Dive into brilliance with our featured work
            </h3>
            <div className="w-12 border-b border-foreground hidden lg:block" />
            <p className="text-foreground/80">
              where innovation takes shape, and creativity knows no bounds
            </p>
          </div>
          <div
            ref={ServiceCardsRef}
            className="px-4 md:px-20 lg:px-12 w-full flex flex-col lg:flex-row gap-6 lg:gap-16 h-full"
          >
            {ProjectArray.map((value, index) => (
              <ImageCard card={value} key={`${value.title}-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;

type ImageCardPropType = {
  card: {
    title: string;
    image: any;
    products: string;
    url: string;
  };
};

const ImageCard = ({ card }: ImageCardPropType) => {
  const { title, image, products, url } = card;
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      className="h-[80dvh] md:h-[60dvh] w-full p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="group bg-white rounded-xl h-full relative bottom-0 left-0 flex justify-end flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all p-4 hover:scale-105 duration-500 border">
        <div className="absolute top-0 left-0 scale-100 group-hover:scale-100 transition-all duration-700 object-cover hover:object-contain h-full">
          <Image
            alt=""
            src={image}
            className="h-full w-full z-0 object-cover scale-125 group-hover:scale-100 transition-all duration-700"
          />
        </div>
        <motion.div
          className="flex flex-col justify-between items-center z-10 bg-slate-600 p-4 rounded-xl shadow-2xl"
          initial={false}
          animate={{ y: isHovered ? 0 : 90 }}
        >
          <div className="text-white flex justify-between w-full">
            <div className="text-xl font-semibold">{title}</div>
            <Link
              href={url}
              target="_blank"
              className="w-fit h-fit p-2 transform duration-500 rounded-full border border-white hover:bg-white text-white hover:text-black cursor-pointer"
            >
              <ArrowTopRightIcon />
            </Link>
          </div>
          <div className="text-xs text-white w-full pb-2">{products}</div>
        </motion.div>
      </div>
    </motion.div>
  );
};
