'use client'
import React, { useLayoutEffect } from "react";
import { Button } from "../ui";
import gsap from "gsap";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import MacGirl from "../../image/macgirl.png";
import Contact from "../../image/contact.png";

interface ServiceClientsProps {
  className?: string;
}
const InterestedSection: React.FC<ServiceClientsProps> = ({ className }) => {
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
  const timeline = gsap.timeline({
    delay: 2,
  });

  let matchMediaToggler = gsap.matchMedia();

  useLayoutEffect(() => {
    matchMediaToggler.add("(max-width: 1023px)", () => {
      timeline
        .fromTo(
          "#first",
          {
            x: -100,
          },
          {
            x: 0,
            stagger: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
              scrub: 1,
              start: "center 600px",
              end: "end 300px",
              trigger: "#triggerTitle-service-small",
            },
          }
        )
        .fromTo(
          "#second",
          {
            x: 450,
          },
          {
            x: -10,
            ease: "easeInOut",
            scrollTrigger: {
              scrub: 0.2,
              start: "center 600px",
              end: "end 300px",
              trigger: "#triggerTitle-service-small",
            },
          }
        )
        .fromTo(
          "#third",
          {
            x: -300,
          },
          {
            x: -5,
            ease: "easeInOut",
            scrollTrigger: {
              scrub: 0.2,
              start: "center 600px",
              end: "end 300px",
              trigger: "#triggerTitle-service-small",
            },
          }
        )
        .fromTo(
          "#fourth",
          {
            x: 100,
          },
          {
            x: 0,
            scrollTrigger: {
              scrub: 0.2,
              start: "center 600px",
              end: "end 300px",
              trigger: "#triggerTitle-service-small",
            },
            ease: "easeInOut",
          }
        );
    });
    matchMediaToggler.add("(min-width: 1040px)", () => {
      timeline
        .fromTo(
          "#first",
          {
            x: "0%",
          },
          {
            x: "20%",
            stagger: 0.2,
            ease: "easeInOut",
          }
        )
        .fromTo(
          "#second",
          {
            x: "50%",
          },
          {
            x: "30%",
            delay: 0.2,
            ease: "easeInOut",
          }
        )
        .fromTo(
          "#third",
          {
            x: "0%",
          },
          {
            x: "20%",
            stagger: 0.2,
            ease: "easeInOut",
          }
        )
        .fromTo(
          "#fourth",
          {
            x: "50%",
          },
          {
            x: "40%",
            stagger: 0.2,
            ease: "easeInOut",
          }
        );
      gsap.fromTo(
        "#contact",
        { rotation: 0 },
        {
          rotate: 360,
          duration: 10,
          repeat: Infinity,
          ease: "none",
          transformOrigin: "center center",
        }
      );
    });
  }, []);

  return (
    <>
      <section
        id="section-Interested-ref"
        className="trigger w-screen h-screen h-full section-featured-ref overflow-hidden lg:p-8 relative lg:my-0 md:my-0 lg:fixed top-0 left-0 z-10 bg-background lg:shadow-2xl"
      >
        <div
          className={`lg:grid lg:grid-cols-12 relative items-start w-full lg:h-screen h-full ${className}`}
        >
          <div className="py-4">
            <div className="w-full lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
              <Marquee title="career in nugen" />
            </div>
          </div>
          <div className="text-4xl md:text-7xl xl:text-[118px] flex flex-col justify-center items-center lg:block font-extrabold col-span-11 h-full tracking-widest uppercase md:pb-52 md:py-52 pt-52 xl:pt-22 xl:w-[85%]">
            <h2 id="first">Interested to</h2>
            <h2 id="second" className="relative">
              <span>w</span>
              <span className="relative">
                o
                <div className="bg-black flex justify-center items-center rounded-full absolute xl:w-[100px] xl:h-[100px] w-[160px] h-[160px] md:w-[80px] md:h-[80px] -top-[230px] md:-translate-x-[36%] lg:w-[52px] lg:h-[52px] lg:-translate-x-3 xl:translate-x-4 2xl:-translate-x-8 md:left-[15px] md:top-[13px] lg:left-[25px] lg:top-[30px]">
                  <Image
                    height={60}
                    width={60}
                    alt="pic"
                    src={MacGirl}
                    className="absolute xl:h-[70px] xl:w-[70px] h-[100px] w-[100px] md:h-[50px] md:w-[50px] lg:w-[30px] lg:h-[30px]"
                  />
                  <Image
                    height={100}
                    width={100}
                    alt="pic"
                    src={Contact}
                    className="xl:h-[90px] xl:w-[90px] h-[150px] w-[150px] md:h-[75px] md:w-[73px] lg:w-[50px] lg:h-[50px]"
                    id="contact"
                  />
                </div>
              </span>
              <span>rk</span>
            </h2>
            <h2 id="third"> with us ?</h2>
            <div className="" id="fourth">
              <Button
                onClick={handleClick}
                variant="outline"
                className="transform duration-500 lg:mt-20 my-20 p-6"
              >
                hr@nugeninfo.com
              </Button>
            </div>
          </div>
          <div className="absolute top-[620%]" id="trigger-service-section" />
          <div className="absolute top-[350%]" id="triggerTitle-service" />
        </div>
        <div
          className="absolute top-[26%] lg:top-[8%]"
          id="triggerTitle-service-small"
        />
      </section>
    </>
  );
};

export default InterestedSection;
