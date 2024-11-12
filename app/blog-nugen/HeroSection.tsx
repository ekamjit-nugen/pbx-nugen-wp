import Image from 'next/image'
import React from 'react'
import dummyImage from '../../components/icons/png/Waterfall-landscape.jpg'
export default function HeroSection() {
    return (
        <>
            <div className="relative w-full bg-[#111827] md:bg-white flex py-20">
                <div className="absolute top-0 w-full md:w-[50%] bg-[#111827] h-full z-10 md:rounded-r-3xl"></div>
                <div className=" w-full z-20 flex flex-col md:flex-row justify-center h-full">
                    <div className="w-full md:w-[70%] p-4 text-white flex flex-col gap-4 pl-8 lg:pl-32">
                        <div className="flex gap-2">
                            <button className='w-fit rounded-full border-2 border-white px-2'>Tools</button>
                            <button className='w-fit rounded-full border-2 border-white px-2'>Video</button>
                        </div>
                        <div className="text-white text-3xl">To cool datacenter servers, Microsoft turns to boiling liquid Donec quis</div>
                        <div className="text-white">Immerse yourself in the world of literature with our curated collection of books. From</div>
                    </div>
                    <div className="w-full h-full p-8 rounded-3xl lg:mr-32">
                        <Image src={dummyImage} alt='image' className='!m-0 w-full h-full rounded-3xl border-4 border-white-700' />
                    </div>
                </div>
            </div>
        </>
    )
}
