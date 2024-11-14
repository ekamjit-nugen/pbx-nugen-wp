"use client"
import Image from 'next/image'
import React from 'react'
export interface HeroSectionType {
    header_title: string,
    header_description: string,
    animated_title: string,
    button_value: string,
    post_title: string,
    post_image: string,
    post_description: string,
    date: string,
    button_title: string
}

interface HeroSectionPageType {
    data?: HeroSectionType
}
const HeroSection: React.FC<HeroSectionPageType> = ({ data }) => {
    return (
        <>
            {Array(data)?.map((value) => {
                return <>
                    <div className="relative w-full bg-[#111827] md:bg-white flex py-20">
                        <div className="absolute top-0 w-full md:w-[50%] bg-[#111827] h-full z-10 md:rounded-r-3xl"></div>
                        <div className=" w-full z-20 flex flex-col md:flex-row justify-center h-full">
                            <div className="w-full md:w-[70%] p-4 text-white flex flex-col gap-4 pl-8 lg:pl-32">
                                <div className="flex gap-2">
                                    <button className='w-fit rounded-full border-2 border-white px-2'>Tools</button>
                                    <button className='w-fit rounded-full border-2 border-white px-2'>Video</button>
                                </div>
                                <div className="text-white text-3xl">{value?.post_title}</div>
                                <div className="text-white">{value?.post_description}</div>
                            </div>
                            <div className="w-full h-full p-8 rounded-3xl lg:mr-32">
                                <Image src={value?.post_image || ""} width={400} height={400} alt='image' className='!m-0 w-full h-full rounded-3xl border-4 border-white-700' />
                            </div>
                        </div>
                    </div>
                </>
            })}
        </>
    )
}

export default HeroSection
