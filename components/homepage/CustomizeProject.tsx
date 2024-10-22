"use client";
import React from "react";
import { Button } from "../ui";
import Image from "next/image";
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
const CustomizeProject: React.FC<ServiceClientsProps> = ({
  className,
  pageContent,
}) => {
  return (
    <>
      <section
        id=""
        className=" w-full bg-[#080c3c] h-fit bottom-diagonal overflow-x-hidden lg:shadow-2xl lg:py-12"
      >
        <div className={` relative w-full h-full ${className}`}>
          <div className="w-full flex flex-col justify-center md:flex-row pt-4">
            <div className="h-full w-full lg:-mt-12 flex justify-center items-center">
              <Image
                src={pageContent?.image}
                alt="image"
                height={400}
                width={400}
                className="object-scale-down"
              />
            </div>
            <div className="w-full flex flex-col p-4">
              <div className="font-serif text-[#ff366b] w-[75%] text-3xl lg:text-4xl ">
                {/* {pageContent?.header_title} */}
                Your Custom Projects in Trusted Hands
              </div>
              <div className="pt-8 w-[75%] text-white">
                {/* {pageContent?.header_description} */}
                We are confident we can complete any custom telecom project you have. With our skilled tower technicians, specializing in tower installation and maintenance, we excel in point-to-point wireless, 5G deployment, fiber optic installations, and seamless WiFi setup.
              </div>
              <div className="flex justify-start" id="">
                <Button
                  variant="outline"
                  className="transform duration-500 lg:mt-20 my-20 p-6 text-white border-[#ff366b]"
                >
                  {pageContent?.hr_email}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomizeProject;
