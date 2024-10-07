"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Marquee from "../../components/ui/Marquee";
interface ImagePropsType {
  post_title: any,
  post_image: any,
  post_description: any
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
interface FeaturedClientsProps {
  className?: string;
  props: ImagePropsType[]
  pageContent:PageContent
}
const FeaturedClients: React.FC<FeaturedClientsProps> = ({ className, props,pageContent }) => {
  const followHeadingRef = useRef(null);
  const ServiceCardsRef = useRef(null);
  const bottomCounterSectionRef = useRef(null);
  const timeline = gsap.timeline({
    delay: 1.2,
  });
  let matchMediaToggler = gsap.matchMedia({});


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
            x: "0%",
            duration: 0.5,
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
            duration: 1.5,
            ease: "easeInOut",
          }
        )
        .fromTo(
          bottomCounterSectionRef.current,
          {
            x: "40%",
          },
          {
            x: "0%",
            duration: 0.5,
            ease: "easeInOut",
          }
        );
    });
  });

  return (
    <section
      id="section-featured-ref"
      className="trigger w-[100%] lg:h-screen h-full section-featured-ref lg:overflow-hidden relative md:my-0 lg:fixed top-0 left-0 z-10 bg-background pb-12"
    >
      <div
        className={`lg:grid lg:grid-cols-12 relative items-start w-full lg:h-screen h-full ${className}`}
      >
        <div className="pt-8 pb-4 w-full relative lg:absolute lg:bottom-0 lg:left-[8%] lg:-rotate-90 origin-bottom-left">
          <Marquee title={pageContent?.animated_title||""} />
        </div>
        <div />
        <div className="relaitve grid grid-cols-1 h-[85%] lg:col-span-11">
          <div
            ref={followHeadingRef}
            className="w-full md:w-3/4 px-10  pb-0 flex flex-col lg:flex-row gap-2 lg:gap-8 items-start lg:items-center"
          >
            <h3 className="uppercase text-lg lg:text-2xl font-bold text-primary">
              {pageContent?.header_title}
            </h3>
            <div className="w-12 border-b border-foreground hidden lg:block" />
            <p className="text-foreground/80">
              {pageContent?.header_description}
            </p>
          </div>
          <div className="h-auto relative parent lg:my-2 py-2">
            <div
              ref={ServiceCardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:justify-center lg:justify-between card gap-12 items-center px-10 lg:px-4 md:px-10"
            >
              <LogoCard props={props} />
            </div>
          </div>
          <div
            ref={bottomCounterSectionRef}
            className="flex gap-10 w-auto origin-left md:ml-32 px-10 lg:px-4 pb-12"
          >
            <div className="text-center flex flex-col">
              <div className="font-bold text-2xl md:text-3xl text-start">
                <span id="clientCounter">{pageContent?.number_of_clients}</span>
                {/* <span>+</span> */}
              </div>
              <span className="capitalize font-light text-start">
                {pageContent?.world_wide_clients}
              </span>
            </div>
            <div className="text-center flex flex-col">
              <div className="font-bold text-xl md:text-3xl text-start">
                <span id="companyCounter">{pageContent?.number_of_company}</span>
                {/* <span>+</span> */}
              </div>
              <span className="capitalize font-light text-start">
                {pageContent?.trusted_company}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;

interface LogoCardType {
  props: ImagePropsType[]
}

const LogoCard: React.FC<LogoCardType> = ({ props }) => {
  const cardRef = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          start: "center 550px",
          end: "end",
          trigger: "#triggerFollowHeading",
        },
      }
    );
  }, []);
  return <>
    {props.map( (card: ImagePropsType, index) => {
      return (
        <>
          <div key={index}>
            <div
              className="flex flex-col justify-start relative cards  w-full"
              key={index}
              id={`card-${index}`}
            >
              <div className="flex flex-col min-h-fit h-full lg:h-[240px]">
                <div className="w-1/2 lg:w-10/12 h-full md:h-32 lg:w-[200px] min-h-[145px] lg:h-fit">
                  {card?.post_image && (
                    <Image
                      src={`${card?.post_image}`}
                      className="object-scale-down w-full h-full "
                      alt="image"
                      width={500}
                      height={500}
                    />
                  )}
                </div>
                <h3 className="text-2xl font-extrabold uppercase mt-2">
                  {card?.post_title}
                </h3>
                <div className="text-sm text-foreground/40">
                  {card?.post_description}
                </div>
              </div>
            </div>{" "}
          </div>

        </>
      )
    })}
  </>
};
