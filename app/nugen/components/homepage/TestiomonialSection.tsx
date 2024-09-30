'use client'
import React, { useLayoutEffect, useRef } from "react";
import SwiperCard from "../../components/homepage/SwiperCard";
import {
  TESTIMONOAL_DATA_ONE,
  TESTIMONOAL_DATA_TWO,
} from "../../lib/data/testimonials";
import gsap from "gsap";
import Marquee from "../ui/Marquee";
import useBreakpoint from "../../hooks/useBreakpoint";

const TestimonialSection = () => {
  const followHeadingRef = useRef(null);
  const breakpoints = useBreakpoint();
  const triggerFollowHeadingSmallSize = useRef(null);
  const sectionBodyOne = useRef(null);
  const sectionBodyTwo = useRef(null);
  const sectionBodyThree = useRef(null);
  const sectionBodyFour = useRef(null);
  let matchMediaToggler = gsap.matchMedia();

  useLayoutEffect(() => {
    matchMediaToggler.add("(max-width: 1023px)", () => {
      gsap.fromTo(
        followHeadingRef.current,
        {
          x: -200,
        },
        {
          x: 0,
          scrollTrigger: {
            start: "center 600px",
            end: "end",
            trigger: triggerFollowHeadingSmallSize.current,
          },
          ease: "easeInOut",
        }
      );
      gsap.fromTo(
        sectionBodyOne.current,
        {
          x: 0,
        },
        {
          x: -300,
          delay: "+=2",
          scrollTrigger: {
            trigger: triggerFollowHeadingSmallSize.current,
            start: "center 800px",
            end: "end",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        sectionBodyTwo.current,
        {
          x: -400,
        },
        {
          x: 0,
          delay: "+=2",
          scrollTrigger: {
            trigger: triggerFollowHeadingSmallSize.current,
            start: "center 800px",
            end: "end",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        sectionBodyThree.current,
        {
          x: 0,
        },
        {
          x: -350,
          delay: "+=2",
          scrollTrigger: {
            trigger: triggerFollowHeadingSmallSize.current,
            start: "center 800px",
            end: "end",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        sectionBodyFour.current,
        {
          x: -300,
        },
        {
          x: 100,
          delay: "+=2",
          scrollTrigger: {
            trigger: triggerFollowHeadingSmallSize.current,
            start: "center 800px",
            end: "end",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".swiper-card-gsap",
        {
          x: -300,
        },
        {
          x: 0,
          delay: 1.5,
          ease: "easeInOut",
          stagger: 0.25,
        }
      );
    });

    setTimeout(() => {
      matchMediaToggler.add("(min-width: 1040px)", () => {
        gsap.fromTo(
          [sectionBodyTwo.current, sectionBodyFour.current],
          {
            y: -200,
          },
          {
            y: -800,
            duration: 30,
            ease: "easeInOut",
            stagger: 2,
          }
        );
        gsap.fromTo(
          [sectionBodyOne.current, sectionBodyThree.current],
          {
            y: -800,
          },
          {
            y: -300,
            duration: 30,
            ease: "easeInOut",
            stagger: 2,
          }
        );

        gsap.fromTo(
          followHeadingRef.current,
          {
            x: 0,
          },
          {
            x: 500,
            stagger: 0.2,
            ease: "easeInOut",
          }
        );
      });
    }, 100);
  }, []);

  return (
    <section
      id="testiomonial-section-ref"
      className="trigger w-screen h-full section-featured-ref overflow-hidden pt-8 pb-12 lg:p-8 relative lg:fixed top-0 left-0 z-10 bg-background shadow-top-xl"
    >
      <div
        className={`lg:grid lg:grid-cols-12 relative items-start w-full h-full lg:h-screen`}
      >
        <div className="py-4">
          <div className="w-full lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
            <Marquee title="TESTIMONIALS" />
          </div>
        </div>
        {breakpoints && breakpoints > 1023 ? (
          <div className="col-span-10 w-full lg:w-screen 2xl:w-full 3xl:justify-between grid lg:grid-cols-4 justify-start h-fit lg:h-screen py-4 md:py-24 px-6 gap-4 lg:gap-8">
            <div
              ref={sectionBodyOne}
              className="w-auto flex lg:flex-col justify-start items-start gap-y-12 gap-x-6 h-full"
            >
              {TESTIMONOAL_DATA_ONE.reverse().map((testimonial, index) => (
                <SwiperCard index={index} {...testimonial} key={index} />
              ))}
            </div>
            <div
              ref={sectionBodyTwo}
              className="w-auto flex lg:flex-col justify-start items-start gap-y-12 gap-x-6 h-full"
            >
              {TESTIMONOAL_DATA_ONE.map((testimonial, index) => (
                <SwiperCard index={index} {...testimonial} key={index} />
              ))}
            </div>
            <div
              ref={sectionBodyThree}
              className="w-auto flex lg:flex-col justify-start items-start gap-y-12 gap-x-6 h-full"
            >
              {TESTIMONOAL_DATA_TWO.reverse().map((testimonial, index) => (
                <SwiperCard index={index} {...testimonial} key={index} />
              ))}
            </div>
            <div
              ref={sectionBodyFour}
              className="w-auto flex lg:flex-col justify-start items-start gap-y-12 gap-x-6 h-full"
            >
              {TESTIMONOAL_DATA_TWO.map((testimonial, index) => (
                <SwiperCard index={index} {...testimonial} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="col-span-10 w-full lg:w-screen 2xl:w-full 3xl:justify-between grid lg:grid-cols-4 justify-start h-fit lg:h-screen py-4 md:py-24 px-6 gap-4 lg:gap-8">
            {TESTIMONOAL_DATA_TWO.map((testimonial, index) => (
              <SwiperCard index={index} {...testimonial} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
