import Image from 'next/image'
import React from 'react'
import image from '../../components/icons/png/dummyimage2.png'
import { BlogPageType } from '../homepage/BlogPage'
const RelaedPosts: React.FC<BlogPageType> = ({ BlogData }) => {
    return (
        <>
            <div className="bg-[#f5f6f8] px-0 sm:px-16 pb-24">
                <div className="text-4xl font-bold py-8 px-4">Related Posts</div>
                <div className="flex flex-wrap gap-8 justify-center">
                    {BlogData.map((value) => {
                        return <>
                            <div className="w-72 relative h-[400px] object-none rounded-3xl border-2">
                                <Image src={value?.post_image} width={500} height={500} alt='image' className='absolute z-0 !m-0 h-full w-full rounded-3xl' />
                                <div className="w-full absolute bottom-0 z-90 flex justify-center p-4 ">
                                    <div className="w-[95%] text-red-600 bg-white  rounded-3xl p-4 flex flex-col gap-2">
                                        {/* <div className="flex flex-wrap">
                                            <button className='border-2 rounded-full text-sm px-2'>outdoor</button>
                                            <button className='border-2 rounded-full text-sm px-2'>outdoor</button>
                                            <button className='border-2 rounded-full text-sm px-2'>outdoor</button>
                                        </div> */}
                                        <div className="font-bold text-black text-base">{value?.post_title}</div>
                                        <div className="flex gap-2">
                                            <div className="">
                                                <Image src={image} alt='image' className='w-12 h-12 rounded-full !m-0' />
                                            </div>
                                            <div className="">
                                                <div className="text-base">Name</div>
                                                <div className="text-base">Time</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default RelaedPosts