import React from "react";
import { NugenPage } from "../apiCall";
import NugenData from "@/components/homepage/NugenData";
import HeroSection from "@/components/blog-nugen/HeroSection";
import BlogDescription from "@/components/blog-nugen/BlogDescription";
import BlogSideBar from "@/components/blog-nugen/BlogSideBar";
import RelaedPosts from "@/components/blog-nugen/RelaedPosts";

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
      <RelaedPosts />
    </>
  );
}
