'use client'
import React from "react";
import Marquee from "../ui/Marquee";
import Image from "next/image";
interface aboutContentType {
    header_title: string,
    header_description: string,
    animated_title: string,
    button_value: string,
    "img-1": string,
    "img-2": string
}
interface DataProps {
    header_title: string,
    header_description: string,
    animated_title: string,
    button_value: string,
    post_title: string,
    post_image: string,
    post_description: string,
}
interface ServiceClientsProps {
    className?: string;
    pageContent: aboutContentType
    Data1?: DataProps[]
    Data2?: DataProps[]
}
const AboutSection: React.FC<ServiceClientsProps> = ({ className, pageContent, Data1, Data2 }) => {
    return (
        <>
            <div className="">
                <div className="relative">
                    <div className="py-4">
                        <div className="w-full lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
                            <Marquee title={pageContent?.animated_title} />
                        </div>
                    </div>
                    <div className="p-4 pt-16 flex flex-col lg:flex-row  justify-center items-center">
                        <div className=" flex lg:flex-col  w-full ">
                            <div className="">
                            <div className="w-full lg:pl-24   ">
                                <div className="pt-8 w-[90%]">Welcome to PBX Technologies Inc., your trusted partner for innovative telecom and IT solutions across North America. With over a decade of expertise in the industry, we’ve built a reputation for excellence, delivering cutting-edge services that keep businesses connected, efficient, and ahead of the curve.</div>
                            </div>
                                {Data1?.map((value) => {
                                    return (
                                        <>
                                            <div className="w-full lg:pl-24   ">
                                                <div className="text-primary text-2xl pt-4">
                                                    {value?.post_title}</div>
                                                <div className="pt-4 w-[90%]">{value?.post_description}</div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="h-full w-[45%] flex justify-start items-center p-2 ">
                            <Image src={pageContent?.["img-1"]} alt="image" height={500} width={500} className="object-scale-down" />
                        </div>
                    </div>

                </div>

                <div className="relative">
                    <div className="py-4 invisible lg:visible">
                        <div className="w-[600px] lg:absolute lg:top-0 lg:right-[7%] lg:-rotate-90 origin-top-right">
                            <Marquee title={"About Us"} />
                        </div>
                    </div>
                    <div className="p-4 pt-16 flex flex-col lg:flex-row justify-center items-center">
                        <div className="h-full w-[45%] flex justify-start items-center p-2">
                            <Image src={pageContent?.["img-2"]} alt="image" height={500} width={500} className="object-scale-down" />
                        </div>
                        <div className=" lg:flex-col w-full">
                            {Data2?.map((value) => {
                                return (
                                    <>
                                        <div className="w-full lg:pl-24   ">
                                            <div className="text-primary text-2xl">
                                                {value?.post_title}</div>
                                            <div className="pt-8 w-[90%]">{value?.post_description}</div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutSection;
