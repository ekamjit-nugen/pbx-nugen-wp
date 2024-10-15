'use client'
import React, { useLayoutEffect } from "react";
import { Button } from "../ui";
import gsap from "gsap";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import MacGirl from "../../image/macgirl.png";
import Contact from "../../image/contact.png";
interface ServiceContentType{
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  hr_email: string
  image:string
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
  return (
    <>
      <section
        id="section-Interested-ref"
        className=" w-screen bg-[#080c3c] h-fit overflow-auto lg:p-8 relative top-0 left-0 z-10 lg:shadow-2xl"
      >
        <div
          className={` relative items-start w-full h-full ${className}`}
        >
          <div className="w-screen p-8 flex flex-col md:flex-row">
            <div className="w-full">
              <div className="font-serif text-[#ff366b] text-3xl lg:text-5xl">
                {pageContent?.header_title}</div>
              <div className="pt-8 w-[60%] text-white">{pageContent?.header_description}</div>
              <div className="flex justify-start" id="">
                <Button
                  onClick={handleClick}
                  variant="outline"
                  className="transform duration-500 lg:mt-20 my-20 p-6 text-white border-[#ff366b]"
                >
                  {pageContent?.hr_email}
                </Button>
              </div></div>
            <div className="h-full w-full flex justify-start md:-mt-8 md:-ml-32 md:pr-32 items-center p-2">
              <Image src={pageContent?.image} alt="image" height={500} width={500} className="object-scale-down"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterestedSection;
