'use client'
import React, { useLayoutEffect } from "react";
import { Button } from "../ui";
import gsap from "gsap";
import Marquee from "../ui/Marquee";
import Image from "next/image";
import image from '../../image/telecom-1.2621f6fcf0b917cc2ac3.jpg'
interface ServiceContentType {
    header_title: string,
    header_description: string,
    animated_title: string,
    button_value: string,
    hr_email: string
}
interface ServiceClientsProps {
    className?: string;
    pageContent?: ServiceContentType
}
const AboutSection: React.FC<ServiceClientsProps> = ({ className, pageContent }) => {
    return (
        <>
            <div className="">
                <div className="relative">
                    <div className="py-4">
                        <div className="w-full lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
                            <Marquee title={"About Us"} />
                        </div>
                    </div>
                    <div className="p-4 pt-16 flex flex-col md:flex-row">
                        <div className=" flex lg:flex-col">
                            <div className="w-full lg:pl-24   ">
                                <div className="text-primary text-2xl">
                                    Change About Us content as </div>
                                <div className="pt-8 w-[90%]">Welcome to PBX Technologies Inc., your trusted partner for innovative telecom and IT solutions across North America. With over a decade of expertise in the industry, we’ve built a reputation for excellence, delivering cutting-edge services that keep businesses connected, efficient, and ahead of the curve.</div>
                            </div>
                            <div className="w-full lg:pl-24   ">
                                <div className="text-primary text-2xl">
                                    Change About Us content as </div>
                                <div className="pt-8 w-[90%]">Welcome to PBX Technologies Inc., your trusted partner for innovative telecom and IT solutions across North America. With over a decade of expertise in the industry, we’ve built a reputation for excellence, delivering cutting-edge services that keep businesses connected, efficient, and ahead of the curve.</div>
                            </div>
                            <div className="w-full lg:pl-24   ">
                                <div className="text-primary text-2xl">
                                    Change About Us content as </div>
                                <div className="pt-8 w-[90%]">Welcome to PBX Technologies Inc., your trusted partner for innovative telecom and IT solutions across North America. With over a decade of expertise in the industry, we’ve built a reputation for excellence, delivering cutting-edge services that keep businesses connected, efficient, and ahead of the curve.</div>
                            </div>
                        </div>
                        <div className="h-full w-full flex justify-start items-center p-2">
                            <Image src={image} alt="image" />
                        </div>
                    </div>

                </div>

                <div className="relative">
                    <div className="py-4">
                        <div className="w-[600px] lg:absolute lg:top-0 lg:right-[7%] lg:-rotate-90 origin-top-right">
                            <Marquee title={"About Us"} />
                        </div>
                    </div>
                    <div className="p-4 pt-16 flex flex-col md:flex-row">
                        <div className="h-full w-full flex justify-start items-center p-2">
                            <Image src={image} alt="image" />
                        </div>
                        <div className=" flex lg:flex-col">
                            <div className="w-full lg:pl-24   ">
                                <div className="text-primary text-2xl">
                                    Change About Us content as </div>
                                <div className="pt-8 w-[90%]">Welcome to PBX Technologies Inc., your trusted partner for innovative telecom and IT solutions across North America. With over a decade of expertise in the industry, we’ve built a reputation for excellence, delivering cutting-edge services that keep businesses connected, efficient, and ahead of the curve.</div>
                            </div>
                            <div className="w-full lg:pl-24   ">
                                <div className="text-primary text-2xl">
                                    Change About Us content as </div>
                                <div className="pt-8 w-[90%]">Welcome to PBX Technologies Inc., your trusted partner for innovative telecom and IT solutions across North America. With over a decade of expertise in the industry, we’ve built a reputation for excellence, delivering cutting-edge services that keep businesses connected, efficient, and ahead of the curve.</div>
                            </div>
                            <div className="w-full lg:pl-24   ">
                                <div className="text-primary text-2xl">
                                    Change About Us content as </div>
                                <div className="pt-8 w-[90%]">Welcome to PBX Technologies Inc., your trusted partner for innovative telecom and IT solutions across North America. With over a decade of expertise in the industry, we’ve built a reputation for excellence, delivering cutting-edge services that keep businesses connected, efficient, and ahead of the curve.</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutSection;
