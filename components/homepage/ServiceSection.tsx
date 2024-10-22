"use client";
import React, { useLayoutEffect } from "react";
import { Button } from "../ui";
import gsap from "gsap";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import MacGirl from "../../image/macgirl.png";
import Contact from "../../image/contact.png";
interface ServiceContentType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  hr_email: string;
  image: string;
}
interface ServiceClientsProps {
  className?: string;
  pageContent: ServiceContentType;
}
const InterestedSection: React.FC<ServiceClientsProps> = ({
  className,
  pageContent,
}) => {
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
  return (
    <>
      <section
        id=""
        className=" w-full h-full overflow-x-hidden lg:shadow-2xl top-diagonal"
      >
        <div className={` relative items-start w-full h-full ${className}`}>
          <div className="w-full p-8 flex flex-col md:flex-row">
            <div className="w-full lg:pl-32">
              <div className="font-serif text-red-600 text-3xl lg:text-4xl">
                {pageContent?.header_title}
              </div>
              <div className="pt-8 w-[80%] text-black">
                {pageContent?.header_description}
              </div>
              <div className="flex justify-start" id="">
                <Button
                  onClick={handleClick}
                  variant="outline"
                  className="transform duration-500 lg:mt-20 my-20 p-6 border-[#ff366b]"
                >
                  Join Now
                </Button>
              </div>
            </div>
            <div className="h-full w-full lg:-mt-12 flex justify-start ">
              <Image
                src={pageContent?.image}
                alt="image"
                height={400}
                width={400}
                className="object-scale-down"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterestedSection;
