'use client'
import React, { useLayoutEffect } from "react";
import { Button } from "../ui";
import gsap from "gsap";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import MacGirl from "../../image/macgirl.png";
import Contact from "../../image/contact.png";
import image from '../../image/telecom-1.2621f6fcf0b917cc2ac3.jpg'
interface ServiceContentType{
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  hr_email: string
}
interface ServiceClientsProps {
  className?: string;
  pageContent:ServiceContentType
}
const InterestedSection: React.FC<ServiceClientsProps> = ({ className,pageContent }) => {
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

  // useLayoutEffect(() => {
  //   matchMediaToggler.add("(max-width: 1023px)", () => {
  //     timeline
  //       .fromTo(
  //         "#first",
  //         {
  //           x: -100,
  //         },
  //         {
  //           x: 0,
  //           stagger: 0.2,
  //           ease: "easeInOut",
  //           scrollTrigger: {
  //             scrub: 1,
  //             start: "center 600px",
  //             end: "end 300px",
  //             trigger: "#triggerTitle-service-small",
  //           },
  //         }
  //       )
  //       .fromTo(
  //         "#second",
  //         {
  //           x: 450,
  //         },
  //         {
  //           x: -10,
  //           ease: "easeInOut",
  //           scrollTrigger: {
  //             scrub: 0.2,
  //             start: "center 600px",
  //             end: "end 300px",
  //             trigger: "#triggerTitle-service-small",
  //           },
  //         }
  //       )
  //       .fromTo(
  //         "#third",
  //         {
  //           x: -300,
  //         },
  //         {
  //           x: -5,
  //           ease: "easeInOut",
  //           scrollTrigger: {
  //             scrub: 0.2,
  //             start: "center 600px",
  //             end: "end 300px",
  //             trigger: "#triggerTitle-service-small",
  //           },
  //         }
  //       )
  //       .fromTo(
  //         "#fourth",
  //         {
  //           x: 100,
  //         },
  //         {
  //           x: 0,
  //           scrollTrigger: {
  //             scrub: 0.2,
  //             start: "center 600px",
  //             end: "end 300px",
  //             trigger: "#triggerTitle-service-small",
  //           },
  //           ease: "easeInOut",
  //         }
  //       );
  //   });
  //   matchMediaToggler.add("(min-width: 1040px)", () => {
  //     timeline
  //       .fromTo(
  //         "#first",
  //         {
  //           x: "0%",
  //         },
  //         {
  //           x: "20%",
  //           stagger: 0.2,
  //           ease: "easeInOut",
  //         }
  //       )
  //       .fromTo(
  //         "#second",
  //         {
  //           x: "50%",
  //         },
  //         {
  //           x: "30%",
  //           delay: 0.2,
  //           ease: "easeInOut",
  //         }
  //       )
  //       .fromTo(
  //         "#third",
  //         {
  //           x: "0%",
  //         },
  //         {
  //           x: "20%",
  //           stagger: 0.2,
  //           ease: "easeInOut",
  //         }
  //       )
  //       .fromTo(
  //         "#fourth",
  //         {
  //           x: "50%",
  //         },
  //         {
  //           x: "40%",
  //           stagger: 0.2,
  //           ease: "easeInOut",
  //         }
  //       );
  //     gsap.fromTo(
  //       "#contact",
  //       { rotation: 0 },
  //       {
  //         rotate: 360,
  //         duration: 10,
  //         repeat: Infinity,
  //         ease: "none",
  //         transformOrigin: "center center",
  //       }
  //     );
  //   });
  // }, []);

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
              <Marquee title={pageContent?.animated_title} />
            </div>
          </div>
          <div className="w-screen p-8 pt-32 flex flex-col md:flex-row">
            <div className="w-full">
              <div className="text-primary text-3xl lg:text-5xl">
                {pageContent?.header_title}</div>
              <div className="pt-8 w-[60%]">{pageContent?.header_description}</div>
              <div className="flex justify-start" id="">
                <Button
                  onClick={handleClick}
                  variant="outline"
                  className="transform duration-500 lg:mt-20 my-20 p-6"
                >
                  {pageContent?.hr_email}
                </Button>
              </div></div>
            <div className="h-full w-full flex justify-start md:-mt-8 md:-ml-32 md:pr-32 items-center p-2">
              <Image src={image} alt="image"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterestedSection;
