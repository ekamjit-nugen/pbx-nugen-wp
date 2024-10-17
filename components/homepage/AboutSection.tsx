"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import MarqueStarIcon from "../icons/StarIcon";

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
    <>
      <div className="relative">
        <div className="py-4">
          <div
            ref={titleRef}
            className="w-full text-6xl uppercase font-serif flex justify-center font-bold gap-10"
          >
            <p className="text-primary">{pageContent?.animated_title}</p>
            <MarqueStarIcon />
          </div>
        </div>
        <div className="p-4 pt-16 flex flex-col lg:flex-row justify-center items-center">
          <div className="flex lg:flex-col w-full">
            <div>
              <div className="w-full lg:pl-24"></div>
              <div className="w-full lg:pl-24">
                <div className="text-primary text-2xl">
                  {pageContent?.header_title}
                </div>
                <div className="pt-8 w-[90%]">
                  {pageContent?.header_description}
                </div>
              </div>
              {Data1?.map((value) => {
                return (
                  <div key={value?.post_title} className="w-full lg:pl-24">
                    <div className="text-primary text-2xl pt-4">
                      {value?.post_title}
                    </div>
                    <div className="pt-4 w-[90%]">
                      {value?.post_description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-full w-[45%] flex justify-start items-center p-2">
            <Image
              src={pageContent?.["img-1"]}
              alt="image"
              height={500}
              width={500}
              className="object-scale-down"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="p-4 pt-16 flex flex-col lg:flex-row justify-center items-center">
          <div className="hidden lg:flex h-full w-[45%] justify-start items-center p-2">
            <Image
              src={pageContent?.["img-2"]}
              alt="image"
              height={500}
              width={500}
              className="object-scale-down"
            />
          </div>
          <div className="lg:flex-col w-full">
            {Data2?.map((value) => {
              return (
                <div key={value?.post_title} className="w-full lg:pl-24">
                  <div className="text-primary text-2xl">
                    {value?.post_title}
                  </div>
                  <div className="pt-8 w-[90%]">{value?.post_description}</div>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden h-full w-[45%] justify-start items-center p-2">
            <Image
              src={pageContent?.["img-2"]}
              alt="image"
              height={500}
              width={500}
              className="object-scale-down"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
