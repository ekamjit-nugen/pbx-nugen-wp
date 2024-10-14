'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/ui/Marquee";
import { Button } from "../ui";
interface OurProjectsType {
    buttonData: any
}
const OurProjects: React.FC<OurProjectsType> = ({ buttonData }) => {
    return (
        <section
            id="featured-work-section"
            className="trigger w-screen lg:h-screen h-full section-featured-ref overflow-hidden lg:p-8 relative lg:fixed top-0 left-0 z-10 bg-background shadow-2xl"
        >
            <div
                className={` flex flex-col justify-center lg:grid  relative items-start w-full lg:h-screen h-full`}
            >
                <div className="w-full pt-8 pb-4 lg:absolute lg:bottom-0 lg:left-[8%] lg:-rotate-90 origin-bottom-left">
                    <Marquee title={"Our Projects"} />
                </div>
                <div />
                <div className=" w-full h-full flex flex-col justify-center items-center lg:-mt-32 ">
                    {buttonData?.length >= 2 &&
                        <div className="flex gap-4 justify-center items-center flex flex-col lg:flex-row">  
                            {buttonData?.map((value: any) => {
                                return <>
                                    <Link href={{ pathname: "/work-service-section", query: { data: JSON.stringify(value?.button_value)} }} >
                                        <div className="flex flex-col justify-center items-center">
                                            <Image src={value?.button_image} alt="image" height={500} width={500} className="object-fit" />
                                            <Button>{value?.button_title}</Button>
                                        </div>
                                    </Link>
                                </>
                            })}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default OurProjects;


