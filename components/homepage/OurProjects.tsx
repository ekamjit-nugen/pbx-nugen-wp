"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/ui/Marquee";
interface OurProjectsType {
  buttonData: any;
}

const OurProjects: React.FC<OurProjectsType> = ({ buttonData }) => {
  return (
    <section
      id="featured-work-section"
      className="trigger w-screen lg:h-screen h-screen section-featured-ref overflow-hidden lg:p-8 relative lg:fixed top-0 left-0 z-10 bg-background shadow-2xl"
    >
      <div
        className={` flex flex-col justify-center lg:grid  relative items-start w-full lg:h-screen h-full`}
      >
        <div className="w-full text-6xl uppercase font-serif flex justify-center font-bold gap-10 text-primary">
          Our Projects
        </div>
        <div />
        <div className=" w-full h-full flex flex-col justify-center items-center lg:-mt-32 ">
          {buttonData?.length >= 2 && (
            <div className="flex gap-8 justify-center items-center flex flex-col lg:flex-row">
              {buttonData?.map((value: any) => {
                return (
                  <>
                    <Link
                      href={{
                        pathname: "/work-service-section",
                        query: { data: JSON.stringify(value?.button_value) },
                      }}
                    >
                      <div className="flex flex-col justify-center items-center drop-shadow-2xl transition duration-400 ease-in-out hover:scale-110">
                        <Image
                          src={value?.button_image}
                          alt="image"
                          height={430}
                          width={430}
                          className="object-fit"
                        />
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
