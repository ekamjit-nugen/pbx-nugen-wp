import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

const ServiceCard = (props: any) => {
  const iconRef = useRef(null);
  const movedAnimation = gsap.timeline().pause();
  useLayoutEffect(() => {
    movedAnimation.fromTo(
      iconRef.current,
      {
        x: 0,
        y: 0,
      },
      {
        x: -6,
        y: 6,
        rotate: "+=6",
        duration: 3,
        ease: "none",
        repeat: 99,
        yoyoEase: true,
      }
    );
  });

  const mouseEnter = () => {
    movedAnimation.play();
  };

  const mouseLeave = () => {
    movedAnimation.pause();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={`cursor-pointer w-[280px] md:w-[330px] border-2 bg-background rounded-2xl p-2 group hover:shadow-xl ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 group transition-all`}
          id={`card-${props.index + 1}`}
        >
          <div
            className={`h-[420px] w-[300px] md:w-[360px]  grid grid-rows-2 relative`}
          >
            <div className="flex justify-between">
              <div className="p-2 text-black dark:text-white">
                <ArrowIcon />
              </div>
              <div
                className="md:text-9xl text-7xl font-extrabold uppercase w-full flex items-center justify-center grayscale group-hover:grayscale-0 mx-[auto]"
                ref={iconRef}
              >
                {props?.url ? (
                  <Link href={props?.url}>
                    <Image
                      src={props.post_image}
                      alt=""
                      height={200}
                      width={200}
                    />
                  </Link>
                ) : (
                  <Image
                    src={props.post_image}
                    alt=""
                    height={200}
                    width={200}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3 p-4">
              <h2 className="md:text-lg text-base font-bold uppercase text-foreground/80 text-left ">
                {props.top_title}
              </h2>
              <p className=" text-left text-foreground md:text-2xl text-xl font-extrabold uppercase group-hover:underline group-hover:underline-offset-8">
                {props.post_title}
              </p>
              <p className="text-foreground/30 text-sm line-clamp-3 text-left pr-8">
                {props.post_description?.split(" ").slice(0, 30).join(" ") +
                  (props.post_description?.split(" ").length > 50 ? "..." : "")}
              </p>
            </div>
          </div>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetDescription>
          <div className="relative overflow-y-scroll md:overflow-y-visible h-[85vh]">
            <div className="w-auto h-fit md:absolute -top-10 -left-20">
              <Image
                src={props.post_image}
                className="object-cover w-28 mx-auto md:w-[200px]"
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col pt-8 lg:pt-40  px-0 items-start md:my-3 gap-4">
              {props.innerContent.map(
                (
                  modal: {
                    title: string;
                    subTitle: string;
                    description: string;
                  },
                  index: number
                ) => (
                  <div key={index} className="flex flex-col gap-y-2">
                    <h3 className="text-base font-extrabold uppercase text-foreground">
                      {modal.title}
                    </h3>
                    <h3 className="text-sm font-semibold uppercase text-foreground/80">
                      {modal.subTitle}
                    </h3>
                    <div className="text-[10px] text-foreground/50 text-start leading-6">
                      {modal?.description}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 items-center justify-start mt-5 h-12">
              {/* {props?.icons?.map((val: any, i: number) => (
                <div
                  key={i}
                  className={cn(
                    "dark:bg-foreground rounded-xl border p-2 w-full flex justify-center items-center h-full"
                  )}
                >
                  {val}
                </div>
              ))} */}
            </div>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default ServiceCard;

const ArrowIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21L1 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M1 11V1H11" fill="currentColor" />
    <path
      d="M1 11V1H11"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
