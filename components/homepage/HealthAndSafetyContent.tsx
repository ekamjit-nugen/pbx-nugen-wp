import Image from 'next/image'
import React from 'react'
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
        <div className='p-4'>
            <div className="w-full h-full flex justify-center text-primary font-serif text-5xl py-6">{props?.contentData?.animated_title}</div>
            <div className="w-full h-full flex">
                <div className="w-full h-full pl-8 pt-8">
                    <p className='p-4'>{props?.contentData?.description1}</p>
                    <p className='p-4'>{props?.contentData?.description2}</p>
                </div>
                <div className="w-full h-full flex justify-center">
                    <Image src={props?.contentData?.image || ""} alt='image' className='object-scale-down' height={250} width={250} />
                </div>
            </div>
            <div className="flex justify-center pb-24 gap-8">
                {props?.buttonData?.map((value) => {
                    return (
                        <>
                            <Button className='py-6'>{value?.['button-label']}</Button>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default HealthAndSafetyContent
