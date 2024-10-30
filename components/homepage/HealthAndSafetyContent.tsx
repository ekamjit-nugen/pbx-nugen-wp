"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { blurAnimation, leftToRightAnimation, rightToLeftAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
import { Button } from '../ui'
interface buttonDataType {
    header_title: string,
    header_description: string,
    animated_title: string,
    button_value: string,
    post_title: string,
    post_image: undefined,
    post_description: string,
    description: string,
    'button-label': string,
    'button-value': string
}
interface HealthAndSafetyContentType {
    header_title: string,
    header_description: string,
    animated_title: string,
    button_value: string,
    url: string,
    image: string,
    'our-affilations': string,
    description1: string,
    description2: string
}
interface PropsType {
    buttonData: buttonDataType[],
    contentData: HealthAndSafetyContentType
}
const HealthAndSafetyContent: React.FC<PropsType> = (props) => {
    return (
        <motion.div
            {...staggerParent}
            className='p-4 flex flex-col justify-center items-center'>
            <motion.div variants={topToBottomAnimation} className="w-full h-full flex justify-center text-primary font-serif text-5xl py-6">{props?.contentData?.animated_title}</motion.div>
            <div className="w-full h-full flex flex-col lg:flex-row">
                <div className="w-full h-full pl-8 pt-8">
                    <motion.p variants={leftToRightAnimation} className='p-4'>{props?.contentData?.description1}</motion.p>
                    <motion.p variants={leftToRightAnimation} className='p-4'>{props?.contentData?.description2}</motion.p>
                </div>
                <motion.div variants={rightToLeftAnimation} className="w-full h-full flex justify-center">
                    <Image src={props?.contentData?.image || ""} alt='image' className='object-scale-down' height={250} width={250} />
                </motion.div>
            </div>
            <motion.div variants={blurAnimation} className="flex flex-col w-fit lg:flex-row justify-center pb-24 gap-8">
                {props?.buttonData?.map((value) => {
                    return (
                        <Button className='py-6'>{value?.['button-label']}</Button>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default HealthAndSafetyContent
