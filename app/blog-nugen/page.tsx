import React from 'react'
import { NugenPage } from '../apiCall'
import NugenData from '@/components/homepage/NugenData'
import HeroSection from './HeroSection'
import BlogDescription from './BlogDescription'
import BlogSideBar from './BlogSideBar'
import RelaedPosts from './RelaedPosts'
export default async function NugenBlog() {
    // const nugendata = await NugenPage("blog")
    return (
        <>
            <HeroSection />
            <div className="w-full flex flex-col mx-[auto] lg:flex-row">
                <div className="w-full p-8">
                    <BlogDescription />
                </div>
                <div className="w-full p-2 lg:w-[60%]">
                    <BlogSideBar />
                </div>
            </div>
            <RelaedPosts/>
        </>
    )
}
