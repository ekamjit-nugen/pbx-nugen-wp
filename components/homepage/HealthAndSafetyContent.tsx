import Image from 'next/image'
import React from 'react'
import image from '../icons/png/safetyimage.png'
import { Button } from '../ui'

export default function HealthAndSafetyContent() {
    return (
        <div className='p-4'>
            <div className="w-full h-full flex justify-center text-primary font-serif text-5xl py-6">Health and safety</div>
            <div className="w-full h-full flex">
                <div className="w-full h-full pl-8 pt-8">
                    <p className='p-4'>At PBX Technologies safety is put at the forefront of our operations. We are committed to each and every one of our employees offering training and support for comfortability and confidence while remaining aware of the work environment. Our team receives knowledge and training to a wide range of safety standards and proper practices.</p>
                    <p className='p-4'>Every job site is different, therefore crews are trained in identifying potential job site hazards that are documented and discussed in daily tailgate talks. Job Site analyses as well as proper work procedures are documented and discussed daily. Our trucks and crews remain fully stocked and equipped with industry leading PPE as well as full kits and equipment for high angle rescue if ever required. We continuously review and revise our health and safety program and make sure our policies and procedures are understood and adhered to. Our dedication for safety not only allows confidence to our employees, but to our customers as well.</p>
                </div>
                <div className="w-full h-full flex justify-center">
                    <Image src={image} alt='image' className='object-scale-down' height={250} width={250} />
                </div>
            </div>
            <div className="flex justify-center pb-24 gap-8">
                <Button className='py-6'>PBX Enviromental Health & Safety Manual</Button>
                <Button className='py-6'>PBX Environmental Health & Safety Policy Statement</Button>
                <Button className='py-6'>Quality Management System Manual</Button>
            </div>
        </div>
    )
}
