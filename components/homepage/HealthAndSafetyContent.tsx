"use client";
import Image from 'next/image'
import React from 'react'
import circle from "../../image/images/shape-circle.png";
import square from "../../image/images/shape-square.png";
import tri from "../../image/images/shape-triangle.png";
import { motion } from "framer-motion";
import { blurAnimation, leftToRightAnimation, rightToLeftAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
import { Button } from '../ui'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
interface buttonDataType {
    header_title: string,
    header_description: string,
    animated_title: string,
    button_value: string,
    post_title: string,
    post_image: undefined,
    post_description: string,
    description?: string,
    'button-label'?: string,
    'button-value'?: string
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
    descriptionData: buttonDataType[]
}
const HealthAndSafetyContent: React.FC<PropsType> = (props) => {
    return (
        <div className="relative">
            {/* Circle Animation */}
            <motion.div
                className="absolute"
                style={{
                    top: "0%",
                    left: "0%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ y: 300, rotate: 0, opacity: 0 }}
                animate={{ x: 100, rotate: 360, opacity: 1 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={circle} alt="circle" />
            </motion.div>
            {/* Square Animation */}
            <motion.div
                className="absolute"
                style={{
                    top: "40%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ x: "-100%", y: "-100%", rotate: 0 }}
                animate={{ x: "50%", rotate: 45 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={square} alt="square" />
            </motion.div>
            <motion.div
                className="absolute"
                style={{
                    bottom: "40%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ x: "-100%", y: "-100%", rotate: 0 }}
                animate={{ x: "50%", rotate: 45 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={square} alt="square" />
            </motion.div>

            {/* Triangle Animation */}
            <motion.div
                className="absolute"
                style={{
                    top: "10%",
                    left: "30%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ x: "-150%", y: "-100%", rotate: 0, opacity: 0 }}
                animate={{ x: "150%", rotate: 180, opacity: 1 }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={tri} alt="triangle" />
            </motion.div>
            <motion.div
                className="absolute"
                style={{
                    bottom: "20%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ x: "-150%", y: "-100%", rotate: 0, opacity: 0 }}
                animate={{ x: "150%", rotate: 180, opacity: 1 }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={tri} alt="triangle" />
            </motion.div>

            {/* Another Circle Animation */}
            <motion.div
                className="absolute"
                style={{
                    top: "0%",
                    left: "70%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ y: 200, x: -100, scale: 0.5 }}
                animate={{ y: 140, x: 50, scale: 1.2, opacity: 0.8 }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={circle} alt="circle" />
            </motion.div>

            {/* Another Triangle Animation */}
            <motion.div
                className="absolute"
                style={{
                    top: "10%",
                    left: "70%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ x: "-150%", y: "-150%", rotate: 0 }}
                animate={{ y: "150%", rotate: 120 }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={tri} alt="triangle" />
            </motion.div>

            {/* Another Square Animation */}
            <motion.div
                className="absolute"
                style={{
                    top: "40%",
                    left: "70%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                }}
                initial={{ x: "-100%", y: "-100%", rotate: 0, opacity: 0 }}
                animate={{ x: "50%", rotate: 360, opacity: 0.7 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <Image src={square} alt="square" />
            </motion.div>

            <motion.div
                {...staggerParent}
                className='p-4 flex flex-col justify-center items-center'>
                <motion.div variants={topToBottomAnimation} className="w-full h-full flex justify-center text-primary font-serif text-5xl py-6">{props?.contentData?.animated_title}</motion.div>
                <div className="w-full h-full flex flex-col lg:flex-row">
                    <div className="w-full h-full pl-8 pt-8">
                        {props?.descriptionData?.map((value) => {
                            return (
                                <>
                                    <div className="w-full lg:pl-8 ">
                                        <motion.div variants={leftToRightAnimation} className="text-primary text-2xl flex items-center">
                                            <div
                                                className="origin-center rotate-45 sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                                            >
                                                <MdKeyboardDoubleArrowRight
                                                    className="absolute z-10 rotate-[315deg] top-[10%] sm:left-[25%] left-[20%]"
                                                    size={30}
                                                    color="#8DDC2E"
                                                />
                                            </div>
                                            <span className="ml-4">{value?.post_title}</span>
                                        </motion.div>
                                        <motion.div variants={leftToRightAnimation} className="p-4 pt-8 w-[90%] lg:pl-16">
                                            {value?.post_description}
                                        </motion.div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <motion.div variants={rightToLeftAnimation} className="w-full h-full flex justify-center">
                        <Image src={props?.contentData?.image || ""} alt='image' className='object-scale-down' height={250} width={250} />
                    </motion.div>
                </div>
                <motion.div variants={blurAnimation} className="flex flex-col w-fit lg:flex-row justify-center pb-24 gap-8">
                    {props?.buttonData?.map((value) => {
                        return (
                            <Button key={value?.['button-label']} className='py-6'>{value?.['button-label']}</Button>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default HealthAndSafetyContent
